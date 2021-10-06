import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //si queremos buscar un elemento en nuestro html lo hacemos con view child , indicando el nombre de la referencia local que le hemos colocado.

  @ViewChild('miFormulario') miFormulario! : NgForm ;

//esto lo utilizo para indicarle un valor inicial mediante en ngModel a mi formulario.
  initForm ={
    producto : "Calistenia",
    precio : 0,
    existencias : 0,
  }

  constructor() { }

  ngOnInit(): void {
  }


  nombreValido() :boolean{
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
     //"miFormulario.controls.producto?.invalid && miFormulario.controls.producto?.touched"
 
   }

   precioValido(){
    return   this.miFormulario?.controls.precio?.touched &&  (this.miFormulario?.controls.precio.value < 0  || this.miFormulario.controls.precio == null)
   }
 


  guardar(){
    //reset form() -> me sirve para reinicar os valores del formulario
    console.log("posteo correcto");
    //con esto puedo  reinicar mi formulario e indicar el valor de los campos una vez eliminado el producto
    console.log(this.miFormulario.resetForm(
      {
        precio : 0,
        existencias: 0
      }
    ));
  }

}
