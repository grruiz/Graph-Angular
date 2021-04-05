import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string,
  texto: string
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {


  menuItem: MenuItem[] = [
    {
      ruta: '/graficas/barras',
      texto: 'Barras'
    },
    {
      ruta: '/graficas/barras-doble',
      texto: 'Barras Doble'
    },
    {
      ruta: '/graficas/circular',
      texto: 'Circular'
    },
    {
      ruta: '/graficas/circular-http',
      texto: 'Circular Http'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
