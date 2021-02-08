import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicRoutingModule } from './public-routing.module';
import { CarrusellComponent } from './components/carrusell/carrusell.component';
import { AsideComponent } from './components/aside/aside.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';
import { DetalleArticuloComponent } from './components/detalle-articulo/detalle-articulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MensajesComponent } from './components/mensajes/mensajes.component';




@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent,
    FooterComponent,
    CarrusellComponent,
    AsideComponent,
    BlogComponent,
    RegistroComponent,
    LoginComponent,
    AddArticleComponent,
    ListArticlesComponent,
    ViewBlogComponent,
    DetalleArticuloComponent,
    MensajesComponent
    ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class PublicModule { }
