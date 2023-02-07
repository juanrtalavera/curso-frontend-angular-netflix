import { HeroInterface } from './../../models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroInfo: HeroInterface;
  constructor() {
    this.heroInfo = {
      title: "Las 5 películas más populares",
      media: [{
        src: '../../../../assets/images/Numbers/1.png',
        alt: '1',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/1-papel.webp',
        alt: 'pelicula mas popular',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Numbers/2.png',
        alt: '2',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/2-reina.webp',
        alt: 'pelicula mas popular',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Numbers/3.png',
        alt: '3',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/3-titanes.webp',
        alt: 'pelicula mas popular',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Numbers/4.png',
        alt: '4',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/4-lostinspace.webp',
        alt: 'pelicula mas popular',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Numbers/5.png',
        alt: '5',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/5-dondecaben.webp',
        alt: 'pelicula mas popular',
        class: "imagen"
      }


    ]
    }


   }

  ngOnInit(): void {
  }



}