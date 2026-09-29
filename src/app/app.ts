import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('Mundo Angular');

  cambiarTitulo() {
    this.title.set('¡Título cambiado por Signal!');
  }
}