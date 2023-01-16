import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  drawerOpenFlag = false;
  constructor(private router: Router) {}

  toggleDrawer(): void {
    this.drawerOpenFlag = !this.drawerOpenFlag;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
