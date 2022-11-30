import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Models/Categoria';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  nome!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let categoria: Categoria = {
      nome: this.nome,
    };

    this.http
      .post<Categoria>("https://localhost:5001/api/categoria/cadastrar", categoria)
      .subscribe({
        next: (categoria) => {
          console.log("Cadastrado", categoria)
        },
      });
  }

}
