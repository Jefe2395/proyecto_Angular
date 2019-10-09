import { Injectable } from '@angular/core';
import {Cliente} from '../app/Model/Cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienterestService {

  arrayCliente : Cliente[];
  constructor(priavte mensajes: MensajesService) { }

  getClientes(): Cliente[]
  {
    return this.arrayCliente;
  }
}
