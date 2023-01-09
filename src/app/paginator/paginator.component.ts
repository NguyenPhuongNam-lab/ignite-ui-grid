import { Component, Host, OnInit } from '@angular/core';
import {
  ConnectedPositioningStrategy,
  IgxPaginatorComponent,
  VerticalAlignment,
} from 'igniteui-angular';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  public positionSettings = {
    verticalDirection: VerticalAlignment.Top,
    verticalStartPoint: VerticalAlignment.Middle,
  };

  public settings = {
    positionStrategy: new ConnectedPositioningStrategy(this.positionSettings),
  };

  constructor(@Host() public igxPaginator: IgxPaginatorComponent) {}
}
