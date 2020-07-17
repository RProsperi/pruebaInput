import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaNumerosComponent } from './components/prueba-numeros/prueba-numeros.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PruebaNumerosComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
