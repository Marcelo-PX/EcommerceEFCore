import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCategoriaComponent } from './components/pages/categoria/cadastrar-categoria/cadastrar-categoria.component';


const routes: Routes = [
  {
    path : "pages/categoria/cadastrar",
    component: CadastrarCategoriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
