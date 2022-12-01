import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CadastrarCategoriaComponent } from './components/views/categoria/cadastrar-categoria/cadastrar-categoria.component';
import { CadastrarProdutoComponent } from './components/views/produto/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './components/views/produto/listar-produto/listar-produto.component';
import { ListarVendaComponent } from './components/views/venda/listar-venda/listar-venda.component';
import { CadastrarFormaPagamentoComponent } from './components/views/formaPagamento/cadastrar-forma-pagamento/cadastrar-forma-pagamento.component';
import { ListarFormaPagamentoComponent } from './components/views/formaPagamento/listar-forma-pagamento/listar-forma-pagamento.component';

@NgModule({
  declarations: [
    AppComponent, 
    CadastrarCategoriaComponent, 
    CadastrarProdutoComponent, 
    ListarProdutoComponent, 
    ListarVendaComponent, CadastrarFormaPagamentoComponent, ListarFormaPagamentoComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
