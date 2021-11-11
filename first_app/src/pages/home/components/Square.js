import React, { useState } from 'react';



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

 
const Square  = ({index,boardStatus,nowPlayer,winFlag},) =>{

    //
    //let a=""

    const [OorX, setOorX] = useState("");

    

    function click(){
        //console.log(nowPlayer)
        //console.log(_boardStatus)

        //console.log(OorX)
        //add(1)
        //a=value
        //===========================================

        if(OorX==="")
        {
            if(nowPlayer[0]==='X')
            {
                setOorX(nowPlayer[0])
                nowPlayer[1]('O')
            }
            else
            {
                setOorX(nowPlayer[0])
                nowPlayer[1]('X')
            }
            boardStatus[0][index] = nowPlayer[0]
            boardStatus[1](boardStatus[0])
            //console.log(boardStatus[0])
            //console.log(index)
            //boardStatus = nowPlayer
        }    
        //============================================
        for(let i=0;i<endGame.length;i++){
            const [indexA,indexB,indexC] = endGame[i]
            if(boardStatus[0][indexA] && boardStatus[0][indexA] === boardStatus[0][indexB] && boardStatus[0][indexA] === boardStatus[0][indexC]){
                winFlag[1](true)
                //winFlag = true
                console.log(boardStatus[0][indexA]+' is winner')
      
            }
          }
        

        //============================================
    }
    if(winFlag[0]===false)
        return <button className="square" onClick={click}>{OorX}</button>
    else
        return <button className="square" >{OorX}</button>
    
}

export default Square