import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {

  nome = "Rodrigo";
  dataNascimento =  "1990-10-01";
  urlImagem = "/assets/foto.jpg";
 
  mostrarDataNascimento() {
    alert(`a data de nascimento do joão é ${this.dataNascimento}`)

  }


}