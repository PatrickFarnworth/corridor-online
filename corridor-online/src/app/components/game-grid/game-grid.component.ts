import { Component } from '@angular/core';
import { DEFAULT_GRID } from 'src/app/interfaces/default-grid';
import { GridElement } from 'src/app/interfaces/grid-element';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss']
})
export class GameGridComponent {
  gridElements: GridElement[][] = DEFAULT_GRID;
}
