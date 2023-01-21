import { Move } from "./move";
import { Player } from "./player";
import { Wall } from "./wall";

export interface Game {
    players: Player[];
    moves: Move[];
    walls: Wall[];
}