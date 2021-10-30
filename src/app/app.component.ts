import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'emojis';
  public mensaje: string = '';
  public emojis: any[] = [];
  public formulario: FormGroup;
  public mostrar: boolean = false;

  constructor(fb: FormBuilder) {
    this.formulario = fb.group({
      inputField: ['', ]
    });
  }

  public mostrarWindow() {
    this.mostrar = !this.mostrar;
  }

  public addEmoji(event) {
    let data = this.formulario.get('inputField');
    data.patchValue(data.value + event.emoji.native);
  }
}

