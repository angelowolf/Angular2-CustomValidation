import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ErrorDirectiva } from './utils/ErrorDirectiva';
import { FormHelp } from './utils/FormHelp/FormHelp.component';
import { TipoDocumentoService } from './utils/services/tipoDocumento.service';
import 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDirectiva,
    FormHelp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TipoDocumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
