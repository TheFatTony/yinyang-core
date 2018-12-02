import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {jqxNumberInputComponent} from 'node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxnumberinput';

@NgModule({
  imports: [CommonModule],
  declarations: [jqxNumberInputComponent],
  exports: [jqxNumberInputComponent],
})
export class NumberInputModule {
}

