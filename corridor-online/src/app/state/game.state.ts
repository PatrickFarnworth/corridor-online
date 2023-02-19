// src/app/core/state/menus/menus.state.ts

import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { GameStateModel } from "./game-state.model";
import { ResetGame } from "./game.action";

@State<GameStateModel>({
  name: "game",
})
@Injectable()
export class GameState {

    constructor() {}
    
    @Action(ResetGame)
    resetGame(
        ctx: StateContext<GameStateModel>
    ) {
        console.log('in the action');

        const state = ctx.getState();
        ctx.setState({
            ...state,
            activeGame: {
                players: [],
                moves: [],
                walls: [],
                currentPlayerIndex: 0
            }
        });
    }
}