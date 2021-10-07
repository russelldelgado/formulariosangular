import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


  miFormulario : FormGroup = this.fb.group({
    nombre : ['', [Validators.required , Validators.minLength(5)]],
    favoritos : this.fb.array([
      //estos que estan dentro no son arreglos si no instancias de form control.
      ['russell' , [Validators.required] ], //this.fb.control...
      ['controlador 2' , [Validators.required]],

    ] , [Validators.required] , [])
  });


  nuevoFavorito : FormControl = new FormControl( '' , [Validators.required]);


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray; //indico que me traiga todos mis favoritos como un forma array
  }


  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
   // this.miFormulario.reset();
  }



  validar(valor : string){
    return this.miFormulario.controls[valor].touched && this.miFormulario.controls[valor].errors;
  
  }


    borrar(index : number){
    console.log(`borrando : ${index}`);

      this.favoritosArr.removeAt(index);
    
  }


  agregarFavorito(){

    if(this.nuevoFavorito.invalid){
      return;
    }


    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value))
   // this.nuevoFavorito.reset();

    console.log("agregar")
  }

}
