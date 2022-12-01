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
  valor!: number;
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

          console.log(this.categorias)
        }
      });
  }

  cadastrar(): void {
    let produto: Produto = {
      nome: this.nome,
      valor: this.valor,
      quantidade: this.quantidade,
      descricao: this.descricao,
      categoriaId: this.categoriaId,
    };
    console.log(produto)

    this.http.post<Produto>("https://localhost:5001/api/produto/cadastrar", produto)
      .subscribe({
        next: (produto) => {
          this._snackBar.open("Produto cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["views/produto/listar"]);
        },
        error: (error) => {
          this._snackBar.open("Erro ao cadastrar produto!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
      });
  }
}
