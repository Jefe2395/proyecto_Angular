import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MensajesService {

	mensajes: string[] = [];

	constructor() { }

	add(mensaje: string): void {
		this.mensajes.push(mensaje);
	}
}
