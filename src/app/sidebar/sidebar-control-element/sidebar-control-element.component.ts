import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-control-element',
  templateUrl: './sidebar-control-element.component.html',
})
export class SidebarControlElementComponent {
  @Input()
  drawerOpenFlag: boolean | undefined;

  @Input()
  toolTip = '';

  @Input()
  icon = '';

  @Input()
  controlElementText = '';

  @Output()
  routeToNavigateEvent: EventEmitter<string> = new EventEmitter<string>();

  emitRouteForNavigation(route: string): void {
    this.routeToNavigateEvent.emit(route);
  }
}
