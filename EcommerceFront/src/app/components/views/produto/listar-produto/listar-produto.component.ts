import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.models';
import { Produto } from 'src/app/models/produto.models';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  produtos?: Produto[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.http.get<Produto[]>("https://localhost:5001/api/produto/listar")
    //Executar a requisição
    .subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        console.log(produtos)
    }
    })
  }

}