import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketService } from '../../services/ticket';

@Component({
  selector: 'app-pago',
  imports: [RouterLink],
  templateUrl: './pago.html',
  styleUrl: './pago.css'
})
export class Pago {
  // Inyecciones seguras
  private ticketService = inject(TicketService);

  butacas = this.ticketService.butacasSeleccionadas;
  candy = this.ticketService.CandySeleccionados;
  totalFinal = this.ticketService.totalFinal;
}
