import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { CircularComponent } from './pages/circular/circular.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';

import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [BarrasComponent, BarrasDobleComponent, CircularComponent, GraficaBarraComponent],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    ChartsModule
  ]
})
export class GraficasModule { }
