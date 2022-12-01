import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarCategoriaComponent } from './components/views/categoria/cadastrar-categoria/cadastrar-categoria.component';
import { CadastrarProdutoComponent } from "./components/views/produto/cadastrar-produto/cadastrar-produto.component";

const routes: Routes = [
  {
    path: "categoria/cadastrar",
    component: CadastrarCategoriaComponent,
  },
  {
    path: "produto/cadastrar",
    component: CadastrarProdutoComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
