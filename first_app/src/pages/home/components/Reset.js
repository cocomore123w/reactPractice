

const Reset = ({winFlag,setBoardstatus}) =>{

    function btnReset(){
        //setBoardstatus(Array(9).fill(null))
        //winFlag = false
        
        //console.log("Reset")
        //==================== reload
        window.location.reload()
    }

    if(winFlag===true){
        return <div>
        <div><br></br></div>
        <button onClick ={btnReset}>Reset</button>
    </div>
    }
    else{
        return null
    }
        
}

export default Reset