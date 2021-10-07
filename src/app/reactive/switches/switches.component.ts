import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {


   miFormulario : FormGroup = this.fb.group({
    genero : ["M" , [Validators.required]] ,
    notificaciones : [true, [Validators.required]],
    condiciones : [false , [Validators.required , Validators.requiredTrue ]]
    
   });

   persona  = {
     genero : "M",
     notificaciones : true,
   }

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    this.miFormulario.reset({...this.persona ,condiciones : true });


    //podemos susbcribirnos en los formulario para saber cuando cambia cada valor

    this.miFormulario.valueChanges.subscribe(({ genero , notificaciones}) =>{
      //si queremos estraer solo un argumento y los demas dejarlos iguales lo podemos hacer indicando el que queremos extraer y a los de mas argumentos ponerlos como un ...restoDeArgumentos y ya igalar nuestra persona directamente con el restoDeArgumentos...........
      
      this.persona.genero = genero;
      this.persona.notificaciones = notificaciones;
    });

    //tambien podemos suscribirnos a un solo valor

    this.miFormulario.get("condiciones")?.valueChanges.subscribe(console.log)

  }


  guardar(){
    console.log('guardando');
    const formularioValue  = {...this.miFormulario.value}
    delete formularioValue.condiciones;
    console.log(formularioValue);
    this.persona = formularioValue;

    
    
  }

}
