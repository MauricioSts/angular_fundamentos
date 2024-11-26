import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Locadora } from './locadora';
import { Carro } from './carro';
import { Moto } from './moto';
import { Veiculo } from './veiculo';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  locadora: Locadora = new Locadora("carros mauro");
  modelo = '';
  ano = '';
  valorDiaria = '';

  
  listarVeiculos() {
    return this.locadora.listarVeiculos();
  }
}

