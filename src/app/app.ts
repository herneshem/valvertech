import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  category: string;
  url: string;
  artClass: string;
  artLabel: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly projects: Project[] = [
    {
      name: 'Login Administrador',
      description: 'Formulario de reservas solo vistas por el administrador-Gestor de reservas.',
      category: 'Web design',
      url: 'https://saboresdelmundofront.netlify.app/admin',
      artClass: 'art-lime',
      artLabel: 'Diseño & web'
    },
    {
      name: 'Web de restaurante Sabores del Mundo',
      description: 'Diseño corporativo para restaurante y reservas.',
      category: 'Aplicación',
      url: 'https://saboresdelmundofront.netlify.app/home',
      artClass: 'art-lilac',
      artLabel: 'Ideas en orden'
    },
    {
      name: 'Proyecto Tres',
      description: 'Un espacio visual para compartir, descubrir y conectar con inspiración.',
      category: 'Experimento',
      url: 'https://tu-proyecto-tres.netlify.app',
      artClass: 'art-peach',
      artLabel: 'Hecho para explorar'
    }
  ];
}
