import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {NgxLoadingModule} from 'ngx-loading';

import {LoadingComponent} from './_directives/loading/loading.component';
import {AlertComponent} from './_directives/alert/alert.component';
import {AlertService} from './_services/alert.service';

import {
  BarGaugeModule,
  BulletChartModule,
  ButtonGroupModule,
  ButtonModule,
  CalendarModule,
  ChartModule,
  CheckBoxModule,
  ColorPickerModule,
  ComboBoxModule,
  ComplexInputModule,
  DataTableModule,
  DateTimeInputModule,
  DockingLayoutModule,
  DockingModule,
  DockPanelModule,
  DragDropModule,
  DrawModule,
  DropDownButtonModule,
  DropDownListModule,
  EditorModule,
  ExpanderModule,
  FileUploadModule,
  FormattedInputModule,
  FormModule,
  GaugeModule,
  GridModule,
  InputModule,
  KanbanModule,
  KnobModule,
  LayoutModule,
  LinearGaugeModule,
  LinkButtonModule,
  ListBoxModule,
  ListMenuModule,
  LoaderModule,
  MaskedInputModule,
  MenuModule,
  NavBarModule,
  NavigationBarModule,
  NotificationModule,
  NumberInputModule,
  PanelModule,
  PasswordInputModule,
  PivotDesignerModule,
  PivotGridModule,
  PopoverModule,
  ProgressBarModule,
  RadioButtonModule,
  RangeSelectorModule,
  RatingModule,
  RepeatButtonModule,
  ResponsivePanelModule,
  RibbonModule,
  SchedulerModule,
  ScrollBarModule,
  ScrollViewModule,
  SliderModule,
  SortableModule,
  SplitterModule,
  SwitchButtonModule,
  TabsModule,
  TagCloudModule,
  TextAreaModule,
  ToggleButtonModule,
  ToolBarModule,
  TooltipModule,
  TreeGridModule,
  TreeMapModule,
  TreeModule,
  ValidatorModule,
  WindowModule
} from './_modules';
import {MaskedInputComponent} from "./components/masked-input.component";
import {DateTimeInputComponent} from "./components/date-time-input.component";
import {MultipleOfDirective} from "./_directives/validators/multiple-of/multiple-of.directive";
import {NumberInputComponent} from "./components/number-input.component";
import {MatchToDirective} from "./_directives/validators/match-to/match-to.directive";
import {GreaterThanDirective} from "./_directives/validators/greater-than/greater-than.directive";
import {ComboBoxComponent} from "./components/combobox.component";
import {ControlErrorsComponent} from "./components/control-errors.component";
import {RequiredDirective} from "./_directives/validators/required/required.directive";
import {MobileDirective} from "./_directives/validators/mobile/mobile.directive";
import {EmailDirective} from "./_directives/validators/email/email.directive";
import {PasswordDirective} from "./_directives/validators/password/password.directive";
import {TextInputComponent} from "./components/text-input.component";
import {ButtonComponent} from "./components/button.component";
import {DropDownListComponent} from "./components/dropdownlist.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AlertComponent,
    LoadingComponent,

    ButtonComponent,
    TextInputComponent,
    DropDownListComponent,
    MaskedInputComponent,
    DateTimeInputComponent,
    ComboBoxComponent,
    NumberInputComponent,
    ControlErrorsComponent,

    MatchToDirective,
    MultipleOfDirective,
    GreaterThanDirective,
    RequiredDirective,
    MobileDirective,
    EmailDirective,
    PasswordDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AlertService],
  exports: [

    AlertComponent,
    LoadingComponent,

    BarGaugeModule,
    BulletChartModule,
    ButtonGroupModule,
    ButtonModule,
    CalendarModule,
    ChartModule,
    CheckBoxModule,
    ColorPickerModule,
    ComboBoxModule,
    ComplexInputModule,
    DataTableModule,
    DateTimeInputModule,
    DockingLayoutModule,
    DockingModule,
    DockPanelModule,
    DragDropModule,
    DrawModule,
    DropDownButtonModule,
    EditorModule,
    ExpanderModule,
    FileUploadModule,
    FormattedInputModule,
    FormModule,
    GaugeModule,
    GridModule,
    InputModule,
    KanbanModule,
    KnobModule,
    LayoutModule,
    LinearGaugeModule,
    LinkButtonModule,
    ListBoxModule,
    ListMenuModule,
    LoaderModule,
    MaskedInputModule,
    MenuModule,
    NavBarModule,
    NavigationBarModule,
    NotificationModule,
    NumberInputModule,
    PanelModule,
    PasswordInputModule,
    PivotDesignerModule,
    PivotGridModule,
    PopoverModule,
    ProgressBarModule,
    RadioButtonModule,
    RangeSelectorModule,
    RatingModule,
    RepeatButtonModule,
    ResponsivePanelModule,
    RibbonModule,
    SchedulerModule,
    ScrollBarModule,
    ScrollViewModule,
    SliderModule,
    SortableModule,
    SplitterModule,
    SwitchButtonModule,
    TabsModule,
    TagCloudModule,
    TextAreaModule,
    ToggleButtonModule,
    ToolBarModule,
    TooltipModule,
    TreeGridModule,
    TreeMapModule,
    TreeModule,
    ValidatorModule,
    DropDownListModule,
    WindowModule,


    ButtonComponent,
    TextInputComponent,
    DropDownListComponent,
    MaskedInputComponent,
    DateTimeInputComponent,
    ComboBoxComponent,
    NumberInputComponent,
    ControlErrorsComponent,

    MatchToDirective,
    MultipleOfDirective,
    GreaterThanDirective,
    RequiredDirective,
    MobileDirective,
    EmailDirective,
    PasswordDirective,
  ]
})
export class YinyangCoreModule { }
