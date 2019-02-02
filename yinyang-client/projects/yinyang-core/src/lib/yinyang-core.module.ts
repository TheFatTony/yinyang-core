import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxLoadingModule} from 'ngx-loading';

import {LoadingComponent} from './_directives/loading/loading.component';
import {AlertComponent} from './_directives/alert/alert.component';
import {AlertService} from './_services/alert.service';

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
import {BarGaugeModule} from "./_modules/bargauge.module";
import {BulletChartModule} from "./_modules/bulletchart.module";
import {ButtonGroupModule} from "./_modules/buttongroup.module";
import {ButtonModule} from "./_modules/button.module";
import {CalendarModule} from "./_modules/calendar.module";
import {ChartModule} from "./_modules/chart.module";
import {CheckBoxModule} from "./_modules/checkbox.module";
import {ComboBoxModule} from "./_modules/combobox.module";
import {ColorPickerModule} from "./_modules/colorpicker.module";
import {ComplexInputModule} from "./_modules/complexinput.module";
import {DataTableModule} from "./_modules/datatable.module";
import {DateTimeInputModule} from "./_modules/datetimeinput.module";
import {DockingLayoutModule} from "./_modules/dockinglayout.module";
import {DockingModule} from "./_modules/docking.module";
import {DropDownButtonModule} from "./_modules/dropdownbutton.module";
import {DockPanelModule} from "./_modules/dockpanel.module";
import {DragDropModule} from "./_modules/dragdrop.module";
import {DrawModule} from "./_modules/draw.module";
import {EditorModule} from "./_modules/editor.module";
import {ExpanderModule} from "./_modules/expander.module";
import {FileUploadModule} from "./_modules/fileupload.module";
import {FormattedInputModule} from "./_modules/formattedinput.module";
import {FormModule} from "./_modules/form.module";
import {GaugeModule} from "./_modules/gauge.module";
import {GridModule} from "./_modules/grid.module";
import {InputModule} from "./_modules/input.module";
import {KanbanModule} from "./_modules/kanban.module";
import {KnobModule} from "./_modules/knob.module";
import {LayoutModule} from "./_modules/layout.module";
import {LinearGaugeModule} from "./_modules/lineargauge.module";
import {LinkButtonModule} from "./_modules/linkbutton.module";
import {ListBoxModule} from "./_modules/listbox.module";
import {ListMenuModule} from "./_modules/listmenu.module";
import {LoaderModule} from "./_modules/loader.module";
import {MaskedInputModule} from "./_modules/maskedinput.module";
import {MenuModule} from "./_modules/menu.module";
import {NavBarModule} from "./_modules/navbar.module";
import {NavigationBarModule} from "./_modules/navigationbar.module";
import {NotificationModule} from "./_modules/notification.module";
import {NumberInputModule} from "./_modules/numberinput.module";
import {PanelModule} from "./_modules/panel.module";
import {PasswordInputModule} from "./_modules/passwordinput.module";
import {PivotDesignerModule} from "./_modules/pivotdesigner.module";
import {PivotGridModule} from "./_modules/pivotgrid.module";
import {PopoverModule} from "./_modules/popover.module";
import {ProgressBarModule} from "./_modules/progressbar.module";
import {RadioButtonModule} from "./_modules/radiobutton.module";
import {RangeSelectorModule} from "./_modules/rangeselector.module";
import {RatingModule} from "./_modules/rating.module";
import {RepeatButtonModule} from "./_modules/repeatbutton.module";
import {ResponsivePanelModule} from "./_modules/responsivepanel.module";
import {ScrollBarModule} from "./_modules/scrollbar.module";
import {SchedulerModule} from "./_modules/scheduler.module";
import {RibbonModule} from "./_modules/ribbon.module";
import {ScrollViewModule} from "./_modules/scrollview.module";
import {SliderModule} from "./_modules/slider.module";
import {SortableModule} from "./_modules/sortable.module";
import {SplitterModule} from "./_modules/splitter.module";
import {SwitchButtonModule} from "./_modules/switchbutton.module";
import {TabsModule} from "./_modules/tabs.module";
import {TagCloudModule} from "./_modules/tagcloud.module";
import {TextAreaModule} from "./_modules/textarea.module";
import {ToggleButtonModule} from "./_modules/togglebutton.module";
import {TooltipModule} from "./_modules/tooltip.module";
import {TreeMapModule} from "./_modules/treemap.module";
import {ToolBarModule} from "./_modules/toolbar.module";
import {TreeModule} from "./_modules/tree.module";
import {TreeGridModule} from "./_modules/treegrid.module";
import {ValidatorModule} from "./_modules/validator.module";
import {WindowModule} from "./_modules/window.module";
import {DropDownListModule} from "./_modules/dropdownlist.module";
import {TextAreaComponent} from "./components/text-area.component";
import {PatternDirective} from './_directives/validators/pattern/pattern.directive';

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
    TextAreaComponent,
    ControlErrorsComponent,

    MatchToDirective,
    MultipleOfDirective,
    GreaterThanDirective,
    RequiredDirective,
    MobileDirective,
    EmailDirective,
    PasswordDirective,
    PatternDirective
  ],
  imports: [
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

    CommonModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
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


    MatchToDirective,
    MultipleOfDirective,
    GreaterThanDirective,
    RequiredDirective,
    MobileDirective,
    EmailDirective,
    PasswordDirective,
    PatternDirective,

    ButtonComponent,
    TextInputComponent,
    DropDownListComponent,
    MaskedInputComponent,
    DateTimeInputComponent,
    ComboBoxComponent,
    NumberInputComponent,
    TextAreaComponent,
    ControlErrorsComponent
  ]
})
export class YinyangCoreModule {
}
