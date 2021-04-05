import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { CircularComponent } from './pages/circular/circular.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'barras',
        component: BarrasComponent
      },
      {
        path: 'barras-doble',
        component: BarrasDobleComponent
      },
      {
        path: 'circular',
        component: CircularComponent
      },
      {
        path: '**',
        redirectTo: 'barras'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
