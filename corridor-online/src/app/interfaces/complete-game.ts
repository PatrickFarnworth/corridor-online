import { Game } from "./game";

export interface CompleteGame extends Game {
    winnerIndex: number;
}