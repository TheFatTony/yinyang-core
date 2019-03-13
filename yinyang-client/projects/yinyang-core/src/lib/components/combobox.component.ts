import {Component, ContentChild, ElementRef, forwardRef, Input, SimpleChanges} from '@angular/core';
import {NG_VALUE_ACCESSOR, NgModel} from "@angular/forms";
import {jqxComboBoxComponent} from "jqwidgets-scripts/jqwidgets-ts/angular_jqxcombobox";

// default equality comparison implementation
const deepEquals = (a: any, b: any) => {
  // dummy implementation
  return JSON.stringify(a) === JSON.stringify(b);
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ComboBoxComponent),
  multi: true
};

@Component({
  selector: 'mchComboBox',
  template: '<div class="g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 rounded"><ng-content></ng-content></div>',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ComboBoxComponent extends jqxComboBoxComponent {

  @ContentChild(NgModel) ngModel: NgModel;

  @Input('auto-select') attrAutoSelect: boolean = true;
  @Input('valueEqualFunc') attrValueEqualFunc: (a: any, b: any) => boolean = deepEquals;
  @Input('displayFunc') attrDisplayFunc: (item: any) => string = (item: any) => item.toString();
  @Input('valueFunc') attrValueFunc: (item: any) => any = (item: any) => item;

  @Input('objectSource')
  set attrObjectSource(currentValue: any[]) {
    if (!currentValue)
      return;

    this.objectSource = currentValue;

    this.source(
      currentValue.map(i => ({
          title: this.attrDisplayFunc(i),
          value: this.attrValueFunc(i)
        })
      )
    );
    this.displayMember('title');
    this.valueMember('value');

    this.selectWrittenValue(this.writtenValue, currentValue);
  }

  get attrObjectSource() {
    return this.objectSource;
  }

  private writtenValue: any;
  private objectSource: any[];

  constructor(private containerElement: ElementRef) {
    super(containerElement);
    this.attrWidth = '100%';
    this.attrHeight = 48;
  }


  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.selectWrittenValue(this.writtenValue, this.attrObjectSource);
  }

  writeValue(value: any): void {
    super.writeValue(value);
    this.writtenValue = value;
    this.selectWrittenValue(value, this.attrObjectSource);
  }

  private selectWrittenValue(value: any, source: any[]) {
    if (!this.attrAutoSelect || !value || !source)
      return;

    const index = source.findIndex(v => this.attrValueEqualFunc(v, value));

    if (index >= 0) {
      this.selectIndex(index);
    }
  }
}
