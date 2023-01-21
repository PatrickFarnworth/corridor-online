import { Game } from "./game";

export interface ActiveGame extends Game {
    currentPlayerIndex: number;
}