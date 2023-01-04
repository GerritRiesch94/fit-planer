import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output()
  toggleDrawerEvent: EventEmitter<void> = new EventEmitter<void>();

  emitToggleDrawerEvent(): void {
    this.toggleDrawerEvent.emit();
  }
}
