import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  drawerOpenFlag = false;

  constructor(private routerService: Router) {}

  toggleDrawer(): void {
    this.drawerOpenFlag = !this.drawerOpenFlag;
  }

  navigateTo(route: string): void {
    console.log('navigate');
    this.routerService.navigate([route]);
  }
}
