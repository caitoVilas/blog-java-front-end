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
    AddArticleComponent
    ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
