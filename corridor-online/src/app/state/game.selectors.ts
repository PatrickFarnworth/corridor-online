import { Injectable } from "@angular/core";
import { Selector } from "@ngxs/store";
import { GameStateModel } from "./game-state.model";


@Injectable()
export class GameSelectors {

    constructor() {}
    
    @Selector()
    static getActiveGame(state: GameStateModel) {
        return state.activeGame;
    }
}