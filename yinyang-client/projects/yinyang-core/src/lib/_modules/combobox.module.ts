import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {jqxComboBoxComponent} from 'node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxcombobox';

@NgModule({
  imports: [CommonModule],
  declarations: [jqxComboBoxComponent],
  exports: [jqxComboBoxComponent],
})
export class ComboBoxModule {
}

