import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre : string;
  favoritos : Favorito[];
}

interface Favorito {
  id : number;
  nombre : string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario! : NgForm ;

  persona : Persona =
  {
    nombre : "fernando",
    favoritos : [
      {
        id : 1 , 
        nombre : "metal gear"
      },
      {
        id : 2 , 
        nombre : "deathStranding"
      },
    ]
    
   
  }

  nuevoJuego : string = "";


  constructor() { }

  ngOnInit(): void {
  }


  guardar(){
    console.log("guardando datos con formulario....");
    console.log(this.miFormulario);

   // this.miFormulario.resetForm();
  }


  agregarJuego(  ){

    if(this.nuevoJuego.trim().length == 0) return;

    console.log(this.nuevoJuego);


    const nuevoFavorito : Favorito = {
      id : this.persona.favoritos.length + 1,
      nombre : this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = "";

  }

  eliminar(index : number){

    this.persona.favoritos.splice(index ,1);

  }

}
