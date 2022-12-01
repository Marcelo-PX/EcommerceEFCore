import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamento } from 'src/app/models/formaPagamento.models';

@Component({
  selector: 'app-listar-forma-pagamento',
  templateUrl: './listar-forma-pagamento.component.html',
  styleUrls: ['./listar-forma-pagamento.component.css']
})
export class ListarFormaPagamentoComponent implements OnInit {
  formaPagamentos?: FormaPagamento[];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.http.get<FormaPagamento[]>("https://localhost:5001/api/formapagamento/list")
    //Executar a requisição
    .subscribe({
      next: (formaPagamentos) => {
        this.formaPagamentos = formaPagamentos;
        console.log(formaPagamentos)
    }
    })
  }

}
