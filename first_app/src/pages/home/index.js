import Board from "./components/Board"
import React, { useState } from 'react';
//import Square from "./components/Square"

import Reset from "./components/Reset";


const Game = () =>{
  //let winFlag = false
  const [player, setPlayer] = useState('X');
  const [winFlag, setwinFlag] = useState(false);


    return <div className="game">
    <div className="game-board">
      <Board player = {player} setPlayer={setPlayer} winFlag = {winFlag} setwinFlag={setwinFlag}/>
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
    <div>
      <Reset winFlag ={winFlag}/>
    </div>
  </div>
}

export default Game