import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map , delay} from 'rxjs/operators';


//necesito implementar esto de async validator para poder hacer las validaciones asincronas

@Injectable({
  providedIn: 'root'
})
export class EmailvalidatorService implements AsyncValidator{

  constructor(private httpClient : HttpClient) { }

  validate(control: AbstractControl):  Observable<ValidationErrors | null> {
    //recibimos toda la información del control de si es valido el formulario, si hay algun tipo de campo etc...
    //en este caso el email lo puedo obtener del control.
    console.log('validar email');

    const email = control.value;
    console.log(email);

    return this.httpClient.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`).pipe(
      delay(3000),
      //no se hace la petición hasta pasados los 3 segundos
      map(resp =>{
        return resp.length === 0  ? null : {emailTomado : true}
      } )
    )
  }
}
