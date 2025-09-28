import React, { useEffect } from "react";
import Cell from './cell'

function Grid({win, setWin, showError, mapA}) {  
    function onClick(row, col){
    //     if (!win){
    //         let newGrid = [...grid]
    //         // newGrid[row][col] = null
            
    //         setGrid(newGrid)
    //         validateWin(newGrid)
    //         playSound('turn')
    //     } else if (win) {
    //         // noop
    //     } else {
    //         showError()
            playSound('error')
    //     }
    }

    function playSound(file){
        const sound = new Audio(`/media/${file}.mp3`)
        sound.playbackRate = 2
        sound.play()
    }
    
    function validateWin(grid){
        submitWin()
    }

    function submitWin(){
        setWin(true)
        playSound('win')
        return true;
    }
    
    return (
        <div className={"grid" + (win ? " win" : "")}>
            {mapA.map((row, rowNum) => 
                <div key={'row-'+rowNum} className="row">
                    {row.map((col, colNum) => 
                        <Cell key={'col-'+colNum} value={col} onClick={() => onClick(rowNum, colNum)} />
                    )}
                </div>
            )}
        </div>
    );
}

export default Grid