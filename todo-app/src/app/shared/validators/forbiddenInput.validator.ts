import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { NO_SPACES_ONLY } from "../constants";

export function forbiddenInput(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => regex.test(control.value) ? {message: `Input cannot consist of only ${NO_SPACES_ONLY.test(control.value) ? 'space' : 'numbers' }.`} : null;
    
};
