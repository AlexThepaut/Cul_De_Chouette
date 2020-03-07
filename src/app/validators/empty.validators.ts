import {FormControl} from "@angular/forms";

/**
* @param {FormControl} control
* @returns {{isEmpty: boolean}}
*/
export function isEmptyValidator (control: FormControl) {
    return  control.value ===""?{ isEmpty: true }:null;
};