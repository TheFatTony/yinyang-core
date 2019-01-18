import {Component, ContentChild, ElementRef, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR, NgModel} from "@angular/forms";
import {jqxTextAreaComponent} from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea";


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextAreaComponent),
  multi: true
};

@Component({
  selector: 'mchTextArea',
  template: '<div><ng-content></ng-content></div>' +
    '<mchErrors *ngIf="showErrors" [component]="myModel"></mchErrors>',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextAreaComponent extends jqxTextAreaComponent {

  @ContentChild(NgModel) myModel: NgModel;

  @Input() showErrors: boolean = true;

  constructor(containerElement: ElementRef) {
    super(containerElement);
    this.attrWidth = '100%';
  }
}
