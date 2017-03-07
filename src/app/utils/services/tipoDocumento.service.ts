import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams,RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TipoDocumentoService {
  private pathParent: string = "/tipodocumento";
  private pathtDatosEconomicosBySolicitud: string;
  private pathPut: string;
  private pathPostDatosEconomicos: string;

  constructor( private http: Http ) {
    this.pathtDatosEconomicosBySolicitud = 'http://localhost:8080/api' + this.pathParent + "/bySolicitud";
    this.pathPut = 'http://localhost:8080/api' + this.pathParent + "";
    this.pathPostDatosEconomicos = 'http://localhost:8080/api' + this.pathParent + "";
  }

   insertar(body: any, onSuccess: any, onError: any): Promise<any>{
    console.log(0)
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.pathPostDatosEconomicos, body, options)
    .toPromise()
    .then(response => this.manejarRespuesta(response, onSuccess, onError))
    .catch(this.manejarError);
  }

  private manejarRespuesta (response: Response, onSuccess: any, onError: any) {
    let resJson;
    if (response.text()) {
      resJson = response.json();
    }
    console.log(9)
    if (response.status === 200) {
      // mostrar mensaje exito
      onSuccess(resJson);
    } else if (response.status === 401) {
      // mandar al LOGIN
    } else if (response.status === 201) {
      console.log("validacion");      
      onError(resJson)
    } else {
     console.error("ERROR !");
     //mostrar mensaje notificacion error
    }
  }

    
  private manejarError(error: any){
    console.error("ERROR CODIGO ", error)
    //mostrar mensaje notificacion error
  }

  private handleAlert(response: Response) {
    let msj = response.headers.get("X-ALERT");
  }
}