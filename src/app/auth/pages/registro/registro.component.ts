import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nombreAppelidoPatter, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validadiones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailvalidatorService } from '../../../shared/validator/emailvalidator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //TODO : temporal
  //tengamos en cuenta dos cosas , tenemos un espacio con dos validaciones, una para el nombre y otra para el apellido.


  miFormulario : FormGroup = this.fb.group({
    //el pattern me sirve para validar una expresión regular
    nombre    : ['' , [Validators.required, Validators.pattern(this.validatorService.nombreAppelidoPatter)]],
    email     : ['' , [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username  : ['' , [Validators.required, this.validatorService.noPuedeSerStrider],],
    password1 : ['' , [Validators.required  , Validators.min(6) ]],
    password2 : ['' , [Validators.required]]

  }, {//estas son opciones que le podemos pasar el formulario....

    //esto me srive para validar el formulario en conjunto , pasando por referencia todo mi formulario
    validators : [
      this.validatorService.camposIguales('password1' , 'password2')
    ]
  });


  constructor( private fb : FormBuilder , private validatorService : ValidatorService , private emailValidator : EmailvalidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre : "Russell delgado",
      email : "russellwallstreet@gmail.com",
      username : "r.dandy",
      password1 : "1233456",
      password2 : "1233456",

    });

  }


  get emailErrorMsg() : string{

    const error = this.miFormulario.get('email')?.errors;

    if(error?.required){
      return 'El correo electronico es requerido';
    }else if(error?.pattern){
      return 'El texto no tiene formato de correo electronico';
    }else if(error?.emailTomado){
      return 'El correo electronico ya fue tomado';
    }

    return '';

  }


  emailRequired(){
    return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;
  }

  emailTomado(){
    return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;
  }


  emailPattern(){
    return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;
  }

  campoNoValido(campo : string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario (){
    console.log(this.miFormulario.value);
//marco todo mi formulario como tocado
    this.miFormulario.markAllAsTouched();
  }
}
