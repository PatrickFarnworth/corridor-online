import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { ActiveGame } from 'src/app/interfaces/active-game';
import { DEFAULT_GRID } from 'src/app/interfaces/default-grid';
import { GridElement } from 'src/app/interfaces/grid-element';
import { GameSelectors } from 'src/app/state/game.selectors';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss']
})
export class GameGridComponent {
  gridElements: GridElement[][] = DEFAULT_GRID;

  game$: Observable<ActiveGame>;

  constructor(private store: Store) {
    this.game$ = this.store.select(GameSelectors.getActiveGame).pipe(
      tap(game => console.log(game))
    );

    this.game$.subscribe()
  }

  ngOnInit(): void {}

  onClick(x: number, y: number) {
    console.log('x: '+x+', y: '+y);
  }
}
