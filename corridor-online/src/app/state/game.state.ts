// src/app/core/state/menus/menus.state.ts

import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { GameStateModel } from "./game-state.model";
import { ResetGame } from "./game.action";

@State<GameStateModel>({
  name: "game",
  defaults: {
    activeGame: {
        players: [],
        moves: [],
        walls: [],
        currentPlayerIndex: 0
    }
  }
})
@Injectable()
export class GameState {

    constructor() {}
    
    @Action(ResetGame)
    resetGame(
        ctx: StateContext<GameStateModel>
    ) {
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

    @Selector()
    static getActiveGame(state: GameStateModel) {
        return state.activeGame;
    }
}