import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';


//el servicio me sirve para poder utilizarlo durante toda mi aplicación 



@Injectable({
  providedIn: 'root'
})
export class ValidatorService {



 public nombreAppelidoPatter :string = "([a-zA-Z]+) ([a-zA-Z]+)"; 
 public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  //le indico el tipo de dato que quiero devolver, en este caso puede ser de tipo error cuando tengamos un error o de tipo null si no tenemos errores
  noPuedeSerStrider(control : FormControl) : ValidationErrors | null{

    const valor : string = control.value?.trim().toLocaleLowerCase();
 
     if(valor === "strider"){
       //si retorno un objeto quiere decir que tengo algun tipo de error en mi formulario
       return {
         strider : true,
       }
     }
 
     //si retorno null en una validación quiere decir que no hay ningun error
 
     return null;
 
   }

//de las otras funciones solo se tiene que mandar la referencia no se ejecutan , por eso tendremos que devolver una función


   camposIguales (campo1 : string , campo2: string){

    return (formGroup : FormGroup | null) =>{

      const pass1 = formGroup?.get(campo1)?.value;
      const pass2 = formGroup?.get(campo2)?.value;

      if(pass1 !== pass2 ){
        formGroup?.get(campo2)?.setErrors({iguales : true})
        return {
          iguales : false
        }
      }

      console.log(formGroup);

      formGroup?.get(campo2)?.setErrors(null);
      
      return null;
    }
   }

}
