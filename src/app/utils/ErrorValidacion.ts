export class ErrorValidacion {
    campo: String;
    mensajeError: String;

    constructor(campo: String, mensajeError: String){
        this.campo = campo
        this.mensajeError = mensajeError;
    }
}