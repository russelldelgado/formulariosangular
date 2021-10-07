import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario : FormGroup = new FormGroup({
  //   nombre      : new FormControl('russell formulario'),
  //   precio      : new FormControl(1400),
  //   existencias : new FormControl(7)

  // });

  //este formulario es igual que el de arriba pero mas sencillo para que pueda ser ampliable
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]], // primero es el valor por defecto , luego validaciones y posteriormente validaciones asyncronas.
    precio: [, [Validators.required, Validators.min(0)]], // primero es el valor por defecto , luego validaciones y posteriormente validaciones asyncronas.
    existencias: [, [Validators.required, Validators.minLength(3)]], // primero es el valor por defecto , luego validaciones y posteriormente validaciones asyncronas.
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //esto lo hacemos para indicarle valores por defecto nuestro formulario cuando haya sido creado , 
    //ahora bien si no vienen algun valor indicado entonces mi formulario revienta


    this.miFormulario.reset({
      nombre: "russsell",
        precio : 200,
    });

  }




  campoEsValido(campo: string) {
    //con eso le paso el valor de la propiedad a verificar , si le paso nombre comprobara nombre , si le paso precio pues el precio y asi sucesivamente.

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched(); //esto hace que hicieramos como si todo el formulario haya sido tocado.
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

}
