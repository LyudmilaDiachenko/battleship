import React, { useEffect } from "react";
import Cell from './cell'

function Grid({win, setWin, showError, map, setMap}) {  
    function onClick(row, col){
        if (!win){
            let newMap = [...map]
            let currentCell = map[row][col]
            if (!currentCell){
                newMap[row][col] = 'miss'
                playSound('miss')
                setMap(newMap)
            } else if (currentCell === 'miss' || currentCell === 'hit'){
                playSound('error')
            } else if (currentCell){
                newMap[row][col] = 'hit'
                playSound('hit')
                setMap(newMap)
                validateWin(newMap)
            }

    //         // newGrid[row][col] = null
            
    //         setGrid(newGrid)
    //         validateWin(newGrid)
    //         playSound('turn')
    //     } else if (win) {
    //         // noop
        } else {
            showError()
            playSound('error')
        }
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
        // setWin(true)
        // playSound('win')
        // return true;
    }
    
    return (
        <div className={"grid" + (win ? " win" : "")}>
            {map.map((row, rowNum) => 
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