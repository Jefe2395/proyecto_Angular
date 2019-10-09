import { Injectable } from '@angular/core';
import {Cliente} from '../app/Model/Cliente';
import {MensajesService} from '../app/mensajes.service';

@Injectable({
  providedIn: 'root'
})
export class ClienterestService {

  arrayCliente : Cliente[];
  constructor(private mensajes: MensajesService) { }

  getClientes(): Cliente[]
  {
    return this.arrayCliente;
  }
}
