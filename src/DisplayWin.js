import { render } from "@testing-library/react";
import react from "react";
var ReactDOM = require('react-dom');

/* Removes board to make room for winner message upon a win */
export const removeBoard = (table) => {
    let board = document.getElementById("board");
    board.style.display = "none";
}

/* X winner message */
export const displayWinX = () => {
    ReactDOM.render(<h2 id="winMessage">"X" is the winner!</h2>,document.getElementById("winSpot"));
    let visible = document.getElementById("winMessage");
    visible.style.display = "block";
}

/* Same winner message for O */
export const displayWinO = () => {
    ReactDOM.render(<h2 id="winMessage">"O" is the winner!</h2>,document.getElementById("winSpot"));
    let visible = document.getElementById("winMessage");
    visible.style.display = "block";
}


