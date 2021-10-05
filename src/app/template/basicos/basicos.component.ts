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

  constructor() { }

  ngOnInit(): void {
  }


  nombreValido() :boolean{
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
     //"miFormulario.controls.producto?.invalid && miFormulario.controls.producto?.touched"
 
   }
 


  guardar( ){
    console.log("guardar");
    console.log(this.miFormulario);
  }

}
