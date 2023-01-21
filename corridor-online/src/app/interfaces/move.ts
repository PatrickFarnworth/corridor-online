import { Position } from "./position";

export interface Move {
    type: string;
    orientation: string;
    position: Position;
}