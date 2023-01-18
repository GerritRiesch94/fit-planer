import { Component } from '@angular/core';

type RouterLinkElement = {
  index: number;
  routerLink: string;
  displayedText: string;
  toolTip: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public routerLinkList: RouterLinkElement[] = [
    { index: 0, routerLink: '/', displayedText: 'app.name', toolTip: 'home.title' },
    { index: 1, routerLink: '/athlete', displayedText: 'athlete.overview', toolTip: 'athlete.overview' },
  ];
}
