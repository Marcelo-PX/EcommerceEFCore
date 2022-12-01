import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Categoria } from "src/app/models/categoria.models";

@Component({
  selector: "app-cadastrar-categoria",
  templateUrl: "./cadastrar-categoria.component.html",
  styleUrls: ["./cadastrar-categoria.component.css"],
})
export class CadastrarCategoriaComponent implements OnInit {
  nome!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let categoria: Categoria = {
      nome: this.nome,
    };

    this.http
      .post<Categoria>("https://localhost:5001/api/categoria/cadastrar", categoria)
      .subscribe({
        next: (categoria) => {
          this._snackBar.open("Categoria cadastrada!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["views/produto/cadastrar"]);
        },
        error: (error) => {
          console.error("Algum erro aconteceu!");
        },
      });
  }
}
