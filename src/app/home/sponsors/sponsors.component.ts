import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  public sponsors: any[] = [
/*    {
      web: 'http://www.eps.udl.cat/',
      img: 'assets/eps.png',
      level: 0
    },
    {
      web: 'https://www.bonarea.com/',
      img: 'assets/bon-area.png',
      level: 1
    },
    {
      web: 'https://www.dominospizza.es',
      img: 'assets/dominos_pizza.png',
      level: 2
    },
    {
      web: 'https://www.jetbrains.com/',
      img: 'assets/jetbrains.svg',
      level: 3
    },*/
  ];

  constructor() { }

  ngOnInit() {
  }

  public getSponsorsByLevel(level: number): any[] {
    return this.sponsors.filter(s => s.level === level);
  }
}
