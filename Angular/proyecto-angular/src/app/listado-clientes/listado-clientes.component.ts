import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Model/Cliente';
import { ClienterestService } from '../clienterest.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteRest: ClienterestService) { }

  ngOnInit() {
    // this.heroes = HEROES;
   // this.clientes = this.clienteRest.();
  }
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
}
