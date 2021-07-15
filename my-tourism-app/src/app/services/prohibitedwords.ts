import { AbstractControl, ValidatorFn } from "@angular/forms";

export function prohibitedwords(regex: RegExp): ValidatorFn {
    return (formControl: AbstractControl): {[errorName: string]: any}|null => {
        const notAllowed = regex.test(formControl.value.toLowerCase()); //makes it so you dont allow capitalization of words so they dont make it through
        if (notAllowed) {
            return {
                prohibited: {value: formControl.value}
            }
        } else {
            return null;
        }
    }
}
