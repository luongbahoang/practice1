import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStructure]'
})
export class StructureDirective {

  constructor(private _viewContainer:ViewContainerRef,
              private templateRef:TemplateRef<any>) { }
  @Input() set appStructure(condition:boolean){
    if(condition){
      this._viewContainer.createEmbeddedView(this.templateRef)
    }
    else  this._viewContainer.clear()
  }
}
