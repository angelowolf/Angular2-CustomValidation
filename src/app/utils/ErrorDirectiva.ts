import { Directive, ElementRef, Input, OnChanges , SimpleChanges} from '@angular/core';
@Directive({ 
  selector:'[error]',
})
export class ErrorDirectiva implements OnChanges {
   
  constructor(private el: ElementRef) {
    this.el = el;
  }

  @Input() form: any;
  @Input('error') error: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ENTRA")
    if(this.form !== undefined) {
      if(this.form.errors.has(this.error)){
        this.el.nativeElement.className = this.el.nativeElement.className.indexOf('has-error') < 0 ? 'has-error' : '';
      } else {
        this.el.nativeElement.className = this.el.nativeElement.className.replace('has-error', '');
      }
    }
  }

}
  