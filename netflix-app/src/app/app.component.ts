import { Component } from '@angular/core';
import { FilmsInterface } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public Anime: FilmsInterface = {
    title: 'Peliculas de Anime',
    media: [
      {
        src: '../../../../assets/images/Anime/perfectblue.webp',
        alt: 'Perfect Blue',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/mononoke.webp',
        alt: 'Mononoke',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/castilloambulante.webp',
        alt: 'Castillo Ambulante',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/evangelion.webp',
        alt: 'Evangelion',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/ninokuni.jpg',
        alt: 'Ninokuni',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/chihiro.webp',
        alt: 'Chihiro',
        class: "imagen"
      },
    ],
  };

  public SciFi: FilmsInterface = {
    title: 'Peliculas de Sci-Fi',
    media: [
      {
        src: '../../../../assets/images/Sci-fi/startrek.webp',
        alt: 'Star Trek',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/watchmen.webp',
        alt: 'Watchmen',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/passengers.webp',
        alt: 'Passengers',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/gits.webp',
        alt: 'Gits',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/12monos.webp',
        alt: '12 Monos',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/6dia.webp',
        alt: '6 Dia',
        class: "imagen"
      },
    ],
  };
  public Drama: FilmsInterface = {
    title: 'Peliculas de Drama',
    media: [
      {
        src: '../../../../assets/images/Drama/clublucha.webp',
        alt: 'Club Lucha',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/1917.webp',
        alt: '1917',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/arrival.webp',
        alt: 'Arrival',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/culpable.jpg',
        alt: 'Culpable',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/sombradiablo.webp',
        alt: 'Sombra Diablo',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/scarface.webp',
        alt: 'Scarface',
        class: "imagen"
      },
    ],
  };
  public Terror: FilmsInterface = {
    title: 'Peliculas de Terror',
    media: [
      {
        src: '../../../../assets/images/Terror/malasana.webp',
        alt: 'Malasana',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/calleterror.jpg',
        alt: 'Calle del Terror',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/insidious2.webp',
        alt: 'Insidious 2',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/apostol.jpg',
        alt: 'Apostol',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/infiernoagua.webp',
        alt: 'Infierno Agua',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/multiple.webp',
        alt: 'Multiple',
        class: "imagen"
      },
    ],
  };
  public Accion: FilmsInterface = {
    title: 'Peliculas de Acción',
    media: [
      {
        src: '../../../../assets/images/Accion/terminator2.webp',
        alt: 'Terminator 2',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/killbill2.webp',
        alt: 'Kill Bill 2',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/renacido.webp',
        alt: 'Renacido',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/elprotector.webp',
        alt: 'El Protector',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/johnwick2.webp',
        alt: 'John Wick 2',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/heat.webp',
        alt: 'Heat',
        class: "imagen"
      },
    ],
  };
  public Comedia: FilmsInterface = {
    title: 'Pelilas de Comedia',
    media: [
      {
        src: '../../../../assets/images/Comedia/regresofuturo.webp',
        alt: 'Regreso Al Futuro',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/dictador.webp',
        alt: 'Dictador',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/erasehollywood.webp',
        alt: 'Erase Hollywood',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/cazafantasmas.webp',
        alt: 'Caza Fantasmas',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/rickandmorty.webp',
        alt: 'Rick and Morty',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/scarymovie3.webp',
        alt: 'Scary Movie 3',
        class: "imagen"
      },
    ],
  };
  
}