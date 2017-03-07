import { Component, Input } from '@angular/core';
import {Form} from './../Form';

@Component({
  selector: 'form-help',
  templateUrl: './FormHelp.template.html'
})
export class FormHelp {
  @Input() form : Form;
  @Input() nombre : String;
}
