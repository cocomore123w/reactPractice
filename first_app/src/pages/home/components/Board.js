import Square from "./Square"
import React, { useState } from 'react';

//import Reset from './Reset';
//=====================

/*
function endGame(){
  
}
*/
const endGame = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
//let winFlag = false
//=====================
const Board =({player, setPlayer,winFlag,setwinFlag}) =>{

    //const [player, setPlayer] = useState("X");


    //let boardStatus = Array(9).fill(null)
    const [boardStatus, setBoardstatus] = useState(Array(9).fill(null));
    //=========================================

    //========================================
    
    //=======================================
    /*
    for(let i=0;i<endGame.length;i++){
      const [indexA,indexB,indexC] = endGame[i]
      if(boardStatus[indexA] && boardStatus[indexA] === boardStatus[indexB] && boardStatus[indexA] === boardStatus[indexC]){
          setwinFlag(true)
          //winFlag = true
          console.log(boardStatus[indexA]+' is winner')

      }
    }
    */
    //=======================================
    //console.log(boardStatus)
    function renderSquare(i) {
        //return <Square index = {i} boardStatus={boardStatus} _boardStatus={setBoardstatus} setPlayer = {setPlayer} nowPlayer = {player} winFlag={winFlag}/>;
        return <Square index = {i} boardStatus={[boardStatus,setBoardstatus]} nowPlayer = {[player,setPlayer]} winFlag={[winFlag,setwinFlag]}/>;  
      }
    //================================
    //================================
    const status = 'Next player: '
    //console.log(player)
    //console.log(boardStatus)
    //console.log(boardStatus)
    return<div>
    <div className="status">{status + player}</div>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
    <div>
     
    </div>
  </div>
}

export default Board