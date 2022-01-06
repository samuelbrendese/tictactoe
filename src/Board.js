import react from "react";
import {useState} from "react";
import { checkRows } from "./CheckRows";
import "./Board.css"

/* Will Track X and O input */
var count = 2;


function Board(){
    /* 9 empty slots for table */
    const [table, setTable] = useState(["", "", "", "", "", "", "", "", ""]);

    /* Each button will pass a number 0...8 to this function, it will update the proper
    box corresponding to the button's input number. If "count" (listed above), is even, then an
    X will be entered, and O for odd. "Count" will increment each turn" */
    const fillSlot = (num) => {
        if (count % 2 === 0){
            table[num] = "X";
            /* Table is updated on each input */
            setTable([...table]);
            count++;

        } else {            
            table[num] = "O";
            setTable([...table]);
            count++;
        }
        /* Checks the table array for a winner */
       checkRows(table);
    }

        /* Resets table array to empty, increments count to maintain turn,
        makes, the board visible again and removes the the winner message */
    const reset = () => {
        setTable(["", "", "", "", "", "", "", "", ""]);
        count++;
        let board = document.getElementById("board");
        board.style.display = "block";
        let msg = document.getElementById("winMessage");
        msg.style.display = "none";
    }

    return(
    <div class="board-container">
        <h1>Tic Tac Toe!</h1>
        <div id="winSpot"></div>

        <div id="board">
            <div>
                {/* Button number will update the proper corresponding box in the array */}
                <button class="btn-style" onClick={() => fillSlot(0)}>{table[0]}</button>
                <button class="btn-style" onClick={() => fillSlot(1)}>{table[1]}</button>
                <button class="btn-style" onClick={() => fillSlot(2)}>{table[2]}</button>
            </div>

            <div>
                <button class="btn-style" onClick={() => fillSlot(3)}>{table[3]}</button>
                <button class="btn-style" onClick={() => fillSlot(4)}>{table[4]}</button>
                <button class="btn-style" onClick={() => fillSlot(5)}>{table[5]}</button>
            </div>

            <div>
                <button class="btn-style" onClick={() => fillSlot(6)}>{table[6]}</button>
                <button class="btn-style" onClick={() => fillSlot(7)}>{table[7]}</button>
                <button class="btn-style" onClick={() => fillSlot(8)}>{table[8]}</button>
            </div>
        </div>

        <div>
            {/* Reset button */}
            <button class="reset-btn" onClick={() => reset()}>Reset</button>
        </div>
    </div>
    )
}

export default Board