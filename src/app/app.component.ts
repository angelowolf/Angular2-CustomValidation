import { Component } from '@angular/core';
import { TipoDocumentoService } from './utils/services/tipoDocumento.service';
import {Form} from './utils/Form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:String = '';

  constructor(private _tipoDocumentoService:TipoDocumentoService){

  }

  enviar(){

      this._tipoDocumentoService.insertar(this.formulario.data(), response => {
        console.log("mostrar notificacion");
      },
      response => {
        console.log("RESPONSE ", response)
        this.formulario.errors.record(response.datos.listaValidaciones);
      });
  }


  formulario = new Form({
    id: '',
    nombre: '',
  })

}
