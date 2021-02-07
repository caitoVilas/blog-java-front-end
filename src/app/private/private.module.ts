import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoArticuloComponent } from './components/nuevo-articulo/nuevo-articulo.component';
import { PrivateRoutingModule } from './private-routing.module';



@NgModule({
  declarations: [
    NuevoArticuloComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  exports: [
   
  ]
})
export class PrivateModule { }
