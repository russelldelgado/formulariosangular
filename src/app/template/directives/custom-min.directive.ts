import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';



@Directive({
    //este es el selector que tengo que utilizar , le indico a angular que coja este formulario
    //solo se va a poder utilizar esta directiva si tiene el customMin y el ngModel
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})//extiendo de validator para extender algunas caracteristicas como el minLeng etc...
export class CustomMinDirective implements Validator {

    //nos sirve para poder recibir un dato del padre
    @Input() minimo!: number;

    constructor() {}

    validate( control: FormControl ) {
        const inputValue = control.value;
        return ( inputValue < this.minimo )
        //si hay algun error regreso el objeto con el error.
                ? { 'customMin': true }
        //si devuelvo nulo es que ningun error ha ocurrido
                : null;
    }

}