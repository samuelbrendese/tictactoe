import react from "react";
import { removeBoard } from "./DisplayWin";
import { displayWinX } from "./DisplayWin";
import { displayWinO } from "./DisplayWin";

/* Checks all win possibilities for X and O, removes the board and displays
a winner message depending for either X or O. */
export const checkRows = (table) => {
    if (table[0] === 'X' && table[1] === "X" && table[2] === "X"){
        removeBoard();
        displayWinX();
    }

    if (table[3] === 'X' && table[4] === "X" && table[5] === "X"){
        removeBoard();
        displayWinX();

    }

    if (table[6] === 'X' && table[7] === "X" && table[8] === "X"){
        removeBoard();
        displayWinX();

    }

    if (table[0] === 'X' && table[3] === "X" && table[6] === "X"){
        removeBoard();
        displayWinX();

    }

    if (table[1] === 'X' && table[4] === "X" && table[7] === "X"){
        removeBoard();
        displayWinX();

    }

    if (table[2] === 'X' && table[5] === "X" && table[8] === "X"){
        removeBoard();
        displayWinX();

    }

    if (table[0] === 'X' && table[4] === "X" && table[8] === "X"){
        removeBoard();
        displayWinX();

    }

    if (table[2] === 'X' && table[4] === "X" && table[6] === "X"){
        removeBoard();
        displayWinX();

    }

    if (table[0] === 'O' && table[1] === "O" && table[2] === "O"){
        removeBoard();
        displayWinO();

    }

    if (table[3] === 'O' && table[4] === "O" && table[5] === "O"){
        removeBoard();
        displayWinO();
    }

    if (table[6] === 'O' && table[7] === "O" && table[8] === "O"){
        removeBoard();
        displayWinO();
    }

    if (table[0] === 'O' && table[3] === "O" && table[6] === "O"){
        removeBoard();
        displayWinO();
    }

    if (table[1] === 'O' && table[4] === "O" && table[7] === "O"){
        removeBoard();
        displayWinO();
    }

    if (table[2] === 'O' && table[5] === "O" && table[8] === "O"){
        removeBoard();
        displayWinO();
    }

    if (table[0] === 'O' && table[4] === "O" && table[8] === "O"){
        removeBoard();
        displayWinO();
    }

    if (table[2] === 'O' && table[4] === "O" && table[6] === "O"){
        removeBoard();
        displayWinO();
    }

}