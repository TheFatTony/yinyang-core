import {Attribute, Directive, forwardRef} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[mchMatchTo][formControlName],[mchMatchTo][formControl],[mchMatchTo][ngModel],[mchMatchToMessage][formControlName],[mchMatchToMessage][formControl],[mchMatchToMessage][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchToDirective), multi: true}
  ]
})
export class MatchToDirective implements Validator {

  constructor(
    @Attribute('mchMatchTo') private readonly otherControlName: string,
    @Attribute('mchMatchToMessage') private readonly message: string
  ) {
    if (!message)
      this.message = 'Values should match';
  }

  validate(control: FormControl): ValidationErrors | null {
    if (!control.parent) {
      return null;
    }

    let thisControl = control;
    let otherControl = control.parent.get(this.otherControlName) as FormControl;

    if (!otherControl) {
      throw new Error(`MatchToDirective: control with name '${this.otherControlName}' is not found in parent group`);
    }

    otherControl.valueChanges.subscribe(() => {
      thisControl.updateValueAndValidity();
    });

    if (!otherControl) {
      return null;
    }

    if (otherControl.value !== thisControl.value) {
      return {
        mchMatchTo: this.message
      };
    }

    return null;
  }

}


