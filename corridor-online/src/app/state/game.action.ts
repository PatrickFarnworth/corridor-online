import { Move } from "../interfaces/move";

export class ResetGame {
    static readonly type = '[game] reset game';
    constructor() {}
}

export class MakeMove {
    static readonly type = '[game] make move';
    constructor(public move: Move) {}
}