import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarCategoriaComponent } from './components/views/categoria/cadastrar-categoria/cadastrar-categoria.component';
import { CadastrarFormaPagamentoComponent } from "./components/views/formaPagamento/cadastrar-forma-pagamento/cadastrar-forma-pagamento.component";
import { ListarFormaPagamentoComponent } from "./components/views/formaPagamento/listar-forma-pagamento/listar-forma-pagamento.component";
import { CadastrarProdutoComponent } from "./components/views/produto/cadastrar-produto/cadastrar-produto.component";
import { ListarProdutoComponent } from "./components/views/produto/listar-produto/listar-produto.component";

const routes: Routes = [
  {
    path: "categoria/cadastrar",
    component: CadastrarCategoriaComponent,
  },
  {
    path: "produto/cadastrar",
    component: CadastrarProdutoComponent,
  },
  {
    path: "produto/listar",
    component: ListarProdutoComponent,
  },
  {
    path: "formaPagamento/cadastrar",
    component: CadastrarFormaPagamentoComponent,
  },
  {
    path: "formaPagamento/listar",
    component: ListarFormaPagamentoComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
