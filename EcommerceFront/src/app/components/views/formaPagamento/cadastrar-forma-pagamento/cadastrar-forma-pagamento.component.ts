import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormaPagamento } from 'src/app/models/formaPagamento.models';

@Component({
  selector: 'app-cadastrar-forma-pagamento',
  templateUrl: './cadastrar-forma-pagamento.component.html',
  styleUrls: ['./cadastrar-forma-pagamento.component.css']
})
export class CadastrarFormaPagamentoComponent implements OnInit {
  nome!: string;
  parcelas!: number;

  constructor(private http: HttpClient,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  cadastrar(): void {
    let formaPagamento: FormaPagamento = {
      nome: this.nome,
      parcelas: this.parcelas
    }
    this.http
      .post<FormaPagamento>("https://localhost:5001/api/formapagamento/create", formaPagamento)
      .subscribe({
        next: (formaPagamento) => {
          this._snackBar.open("forma de Pagamento cadastrada!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["views/produto/cadastrar"]);
          console.log(formaPagamento)
        },
        error: (error) => {
          console.error("Algum erro aconteceu!");
        },
      });
  }

}
