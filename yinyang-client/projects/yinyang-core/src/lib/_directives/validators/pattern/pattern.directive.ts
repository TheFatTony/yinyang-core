import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators} from "@angular/forms";

@Directive({
  selector: '[yycPattern][formControlName],[yycPattern][formControl],[yycPattern][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => PatternDirective), multi: true}
  ]
})
export class PatternDirective implements Validator {

  private readonly patternValidator: ValidatorFn;

  constructor(@Attribute('yycPattern') private readonly pattern: string,
              @Attribute('yycPatternMessage') private readonly message: string = `Value is not valid`) {
    this.patternValidator = Validators.pattern(pattern);
  }

  validate(control: AbstractControl): ValidationErrors | null {

    if (this.patternValidator(control) == null)
      return null;

    return {yycPattern: this.message};
  }

}
