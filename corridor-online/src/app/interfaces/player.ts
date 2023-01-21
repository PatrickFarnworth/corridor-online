import { Position } from "./position";

export interface Player {
    id: number;
    position: Position;
    walls: number;
    colour: string;
    winCondition: Position[];
}