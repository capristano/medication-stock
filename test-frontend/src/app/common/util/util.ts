import { FormGroup, FormArray } from '@angular/forms';

export class Util {
    submitForm(form: FormGroup) {
        for (const i in form.controls) {
            if (form.controls[i]) {
                form.controls[i].markAsDirty();
                form.controls[i].updateValueAndValidity();

                if (form.controls[i] instanceof FormArray) {
                    const formArray = form.controls[i] as FormArray;
                    for (const a in formArray.controls) {
                        if (formArray.controls[a]) {
                            this.submitForm(formArray.controls[a] as FormGroup);
                        }
                    }
                }

                if (form.controls[i] instanceof FormGroup) {
                    const formGroup = form.controls[i] as FormGroup;
                    this.submitForm(formGroup);
                }
            }
        }
    }
}
