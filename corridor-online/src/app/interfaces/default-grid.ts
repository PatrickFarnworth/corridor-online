import { GridElement } from "./grid-element";

const TILE_ROW: GridElement[] = [
    { type: 'tile', status: 'unoccupied' },
    { type: 'v_wall', status: 'invisible' },
    { type: 'tile', status: 'unoccupied' },
    { type: 'v_wall', status: 'invisible' },
    { type: 'tile', status: 'unoccupied' },
    { type: 'v_wall', status: 'invisible' },
    { type: 'tile', status: 'unoccupied' },
    { type: 'v_wall', status: 'invisible' },
    { type: 'tile', status: 'unoccupied' },
    { type: 'v_wall', status: 'invisible' },
    { type: 'tile', status: 'unoccupied' },
    { type: 'v_wall', status: 'invisible' },
    { type: 'tile', status: 'unoccupied' },
    { type: 'v_wall', status: 'invisible' },
    { type: 'tile', status: 'unoccupied' },
    { type: 'v_wall', status: 'invisible' },
    { type: 'tile', status: 'unoccupied' }
];

const WALL_ROW: GridElement[] = [
    { type: 'h_wall', status: 'invisible' },
    { type: 'm_wall', status: 'invisible' },
    { type: 'h_wall', status: 'invisible' },
    { type: 'm_wall', status: 'invisible' },
    { type: 'h_wall', status: 'invisible' },
    { type: 'm_wall', status: 'invisible' },
    { type: 'h_wall', status: 'invisible' },
    { type: 'm_wall', status: 'invisible' },
    { type: 'h_wall', status: 'invisible' },
    { type: 'm_wall', status: 'invisible' },
    { type: 'h_wall', status: 'invisible' },
    { type: 'm_wall', status: 'invisible' },
    { type: 'h_wall', status: 'invisible' },
    { type: 'm_wall', status: 'invisible' },
    { type: 'h_wall', status: 'invisible' },
    { type: 'm_wall', status: 'invisible' },
    { type: 'h_wall', status: 'invisible' }
];

export const DEFAULT_GRID: GridElement[][] = [
    TILE_ROW,
    WALL_ROW,
    TILE_ROW,
    WALL_ROW,
    TILE_ROW,
    WALL_ROW,
    TILE_ROW,
    WALL_ROW,
    TILE_ROW,
    WALL_ROW,
    TILE_ROW,
    WALL_ROW,
    TILE_ROW,
    WALL_ROW,
    TILE_ROW,
    WALL_ROW,
    TILE_ROW
];