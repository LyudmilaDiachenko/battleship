import React, { useEffect, useState } from "react";
import Grid from './js/grid'
import Error from './js/error'
import LeftBar from "./js/leftBar";
import RightBar from "./js/rightBar";
import Header from "./js/header";

function App() {
  const RESOLUTION = 10
  const [win, setWin] = useState(false)
  const [error, setError] = useState(false)
  const [mapA, setMapA] = useState([])
  const [mapB, setMapB] = useState([])

  useEffect(_=>reset(), [])

  function reset(){
    setMapA(fillGrid())
    // setMapB(fillGrid())
    setWin(false)
  }

  function fillGrid(){
    let grid = Array(RESOLUTION).fill().map(_=>Array(RESOLUTION).fill(''))
    const ships = {
      4: [
        [['+','+','+','+']],
        [['+'],['+'],['+'],['+']],
      ],
      3: [
        [['+','+','+']],
        [['+'],['+'],['+']],
      ],
      2: [
        [['+','+']],
        [['+'],['+']],
      ],
      1: [
        [['+']],
        [['+']],
      ]
    }

    placeShip(grid, ships[4])

    placeShip(grid, ships[3])
    placeShip(grid, ships[3])

    placeShip(grid, ships[2])
    placeShip(grid, ships[2])
    placeShip(grid, ships[2])

    placeShip(grid, ships[1])
    placeShip(grid, ships[1])
    placeShip(grid, ships[1])
    placeShip(grid, ships[1])

    console.table(grid)
    return grid
  }

  function placeShip(grid, ships){
    let ship = ships[Math.round(Math.random())]
    let x = Math.floor(Math.random() * RESOLUTION)
    let y = Math.floor(Math.random() * RESOLUTION)

    const valid = ship.reduce((racc, row, rn) => {
      return racc && row.reduce((cacc, col, cn) => {
        return cacc && isTileValid(grid, y+rn, x+cn)
      }, true)
    }, true)

    if (valid){
      ship.forEach((row, rn) => {
        row.forEach((col, cn) => {
          grid[y+rn][x+cn] = col
        })
      })
    } else {
      placeShip(grid, ships)
    }
  }

  function isTileValid(grid, y, x){
    if(
      y < RESOLUTION && x < RESOLUTION &&
      !grid[y-1]?.[x-1] && !grid[y-1]?.[x] && !grid[y-1]?.[x+1] &&
      !grid[y]?.[x-1]   && !grid[y][x]   && !grid[y]?.[x+1] &&
      !grid[y+1]?.[x-1] && !grid[y+1]?.[x] && !grid[y+1]?.[x+1]    
    ) return true
  }

  function showError() {
      setError(true)
      setTimeout(() => setError(false), 1000);
  }
  
  return (
    <div className="App">
      <div className="App-header">
        {/* <Header {...{win}}/> */}
        {/* <LeftBar {...{}}/> */}
        <Grid {...{win, setWin, showError, mapA}} />
        {/* <RightBar {...{reset}} /> */}
        <Error error={error} />          
      </div>
    </div>
  );
}

export default App;
