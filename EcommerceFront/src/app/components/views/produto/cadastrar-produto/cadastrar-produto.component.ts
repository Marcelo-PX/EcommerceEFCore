import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Produto } from "src/app/models/produto.models";
import { Categoria } from "src/app/models/categoria.models";

@Component({
  selector: "app-cadastrar-produto",
  templateUrl: "./cadastrar-produto.component.html",
  styleUrls: ["./cadastrar-produto.component.css"],
})
export class CadastrarProdutoComponent implements OnInit {
  nome!: string;
  descricao!: string;
  quantidade!: number;
  preco!: number;
  categorias!: Categoria[];
  categoriaId!: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.http.get<Categoria[]>
      ("https://localhost:5001/api/categoria/listar")
      .subscribe({
        next: (categorias) => {
          this.categorias = categorias;
        }
      });
  }

  cadastrar(): void {
    let produto: Produto = {
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
      quantidade: this.quantidade,
      categoriaId: this.categoriaId,
    };

    this.http.post<Produto>("https://localhost:5001/api/produto/cadastrar", produto)
      .subscribe({
        next: (categoria) => {
          this._snackBar.open("Produto cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["views/produto/listar"]);
        },
        error: (error) => {
          console.error("Algum erro aconteceu!");
        },
      });
  }
}
