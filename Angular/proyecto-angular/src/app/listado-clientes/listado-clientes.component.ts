import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Model/Cliente';
import { ClienterestService } from '../clienterest.service';
import { CLIENTES } from '../Model/arrayClientes';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteRest: ClienterestService) { }

  ngOnInit() {
   this.clientes = CLIENTES;
   // this.clientes = this.clienteRest.();
  }
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
}
