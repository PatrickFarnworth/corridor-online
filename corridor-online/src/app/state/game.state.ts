// src/app/core/state/menus/menus.state.ts

import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Move } from "../interfaces/move";
import { GameStateModel } from "./game-state.model";
import { MakeMove, ResetGame } from "./game.action";

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

    @Action(MakeMove)
    makeMove(
        ctx: StateContext<GameStateModel>,
        { move }: MakeMove
    ) {
        console.log('in make move action');

        const state = ctx.getState();
        ctx.setState({
            ...state,
            activeGame: {
                ...state.activeGame,
                moves: this.insertMove(state.activeGame.moves, move),
                currentPlayerIndex: (state.activeGame.currentPlayerIndex + 1) % 2
            }
        });
    }

    private insertMove(moveArray: Move[], newMove: Move) {
        moveArray.push(newMove);
        return moveArray;
    }

}