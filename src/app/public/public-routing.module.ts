import { NgModule } from  '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';

import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
     {path: 'add-article', component: AddArticleComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class PublicRoutingModule {

  }
