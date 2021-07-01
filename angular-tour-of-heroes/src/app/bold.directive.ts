import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective{
     
  constructor(private element: ElementRef, private renderer: Renderer2){
         
    this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
  }

  private fontWeight = "normal";
      
  @HostBinding("style.fontWeight") get getFontWeight(){
      
      return this.fontWeight;
  }
  
  @HostBinding("style.cursor") get getCursor(){
      return "pointer";
  }
 
  @HostListener("mouseenter") onMouseEnter() {
      this.setFontWeight("bold");
  }

  @HostListener("mouseleave") onMouseLeave() {
      this.setFontWeight("normal");
  }

  private setFontWeight(val: string) {
      this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
  }
}
