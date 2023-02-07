import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public navigatorInfo: NavigatorInterface;

  constructor() {
    this.navigatorInfo = {
      logo: {
        src: '../../../../assets/images/LOGO/logo_netflix_corto.jpg',
        alt: 'Logo',
        class: "imagen"
      },
      links: [
        {
          text: 'HOME',
          link: '#home',
        },
        {
          text: 'BUSCAR',
          link: '#search',
        }],
      }
  }

  ngOnInit(): void {}
}