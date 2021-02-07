import { NgModule } from  '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { NuevoArticuloComponent } from './components/nuevo-articulo/nuevo-articulo.component';

const routes: Routes = [
   {path: 'nuevo-articulo', component: NuevoArticuloComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class PrivateRoutingModule {

  }
