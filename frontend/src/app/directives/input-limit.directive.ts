import { Directive, Input, DoCheck, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputLimit]'
})
export class InputLimitDirective implements DoCheck {

  public valLength;
  @Input() appInputLimit;
  public inputLimit = 10;

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  ngDoCheck() {
    this.valLength = this.el.nativeElement.value.length;
    console.log('valLength ' + this.valLength);

    if (this.valLength > this.inputLimit) {
      this.el.nativeElement.value = this.el.nativeElement.value.substr(0, this.inputLimit);
    }
  }
}
