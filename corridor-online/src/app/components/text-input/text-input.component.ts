import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { ActiveGame } from 'src/app/interfaces/active-game';
import { GameSelectors } from 'src/app/state/game.selectors';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  game$: Observable<ActiveGame>;
  moveCode: string = '';

  constructor(private store: Store) {
    this.game$ = this.store.select(GameSelectors.getActiveGame).pipe(
      tap(game => console.log(game))
    );

    this.game$.subscribe()
  }

  submit() {
    console.log('moveCode: '+this.moveCode);
  }
}