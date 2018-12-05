import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[mchPassword][formControlName],[mchPassword][formControl],[mchPassword][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordDirective, multi: true}]
})
export class PasswordDirective implements Validator {

  private rule(test: (string) => boolean, result: any) {
    return {
      test: test,
      result: result
    };
  }

  private rules: { test: (string) => boolean, result: any }[] = [
    {
      test: function (i) {
        return /[a-z]/.test(i);
      },
      result: {lower: "At least one lower case letter required"}
    },
    {
      test: function (i) {
        return /[A-Z]/.test(i);
      },
      result: {upper: "At least one upper case letter required"}
    },
    {
      test: function (i) {
        return /[0-9]/.test(i);
      },
      result: {digits: "At least one digit required"}
    },
    {
      test: function (i) {
        return /[$-/:-?{-~!"^_`\[\]]/.test(i);
      },
      result: {symbols: "At least one symbol required"}
    },
    {
      test: function (i) {
        return i && i.length && i.length > 6;
      },
      result: {length: "Password should be at least 7 symbols"}
    },
  ]

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let v = control.value;

    if (v == null) return null;

    let results = this.rules
      .map(r => r.test(v) ? null : r.result)
      .filter(i => !!i)

    console.log(results);

    if (!results)
      return null;

    return results.reduce((cur, next) => Object.assign(cur, next), Object.create({}));
  }

}
