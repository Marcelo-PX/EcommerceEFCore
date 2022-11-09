import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClienteComponent } from './components/pages/cadastrar-cliente/cadastrar-cliente.component';

const routes: Routes = [
  {
    path : "pages/cliente/cadastrar",
    component: CadastrarClienteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
