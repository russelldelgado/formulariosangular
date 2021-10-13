import { FormControl } from "@angular/forms";




 export const  nombreAppelidoPatter :string = "([a-zA-Z]+) ([a-zA-Z]+)"; 
 export const  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  export const noPuedeSerStrider =  (control : FormControl) =>{

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