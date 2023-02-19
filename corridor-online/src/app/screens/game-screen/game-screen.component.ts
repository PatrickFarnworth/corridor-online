import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ResetGame } from 'src/app/state/game.action';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent {

  constructor(private store: Store) { }

  startGame() {
    this.store.dispatch(new ResetGame());
    console.log('yeah');
  }
}
