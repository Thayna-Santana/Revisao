import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miranhas',
  templateUrl: './miranhas.component.html',
  styleUrls: ['./miranhas.component.css']
})
export class MiranhasComponent implements OnInit {

  nome: string = '';
  data: string = '';
  preco: number = 0;


  constructor() { }

  ngOnInit(): void {}

  salvarFilme(): void {
    console.log('Nome: ', this.nome);
    console.log('Data: ', this.data);
    console.log('Preço', this.preco);
    alert('Filme cadastrado com sucesso!')

  }

}
