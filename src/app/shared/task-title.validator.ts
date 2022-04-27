import { AbstractControl, ValidationErrors } from "@angular/forms";

export function taskTitleValidator(control: AbstractControl): ValidationErrors | null {
    const forbidden = /^task$/.test(control.value);
    return forbidden ? { 'forbiddenTitle': { value: control.value } } : null;
}