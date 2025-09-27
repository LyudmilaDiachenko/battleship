import React, { useEffect, useState } from "react";
import Grid from './js/grid'
import Error from './js/error'
import LeftBar from "./js/leftBar";
import RightBar from "./js/rightBar";
import Header from "./js/header";

function App() {
  const RESOLUTION = 4
  const [win, setWin] = useState(false)
  const [error, setError] = useState(false)
  const [mapA, setMapA] = useState([])
  const [mapB, setMapB] = useState([])

  useEffect(_=>reset(), [])

  function reset(){
    setMapA(fillGrid())
    setMapB(fillGrid())
    setWin(false)
  }

  function setShip(grid, size=1){
    let x = Math.floor(Math.random() * RESOLUTION)
    let y = Math.floor(Math.random() * RESOLUTION)
    if(
      !grid[y-1]?.[x-1] && !grid[y-1]?.[x] && !grid[y-1]?.[x+1] &&
      !grid[y]?.[x-1]   && !grid[y]?.[x]   && !grid[y]?.[x+1] &&
      !grid[y+1]?.[x-1] && !grid[y+1]?.[x] && !grid[y+1]?.[x+1]    
    ){
      grid[y][x] = '+'
      return grid
    } else {
      return setShip(grid, size)
    }
  }

  function fillGrid(){
    let grid = Array.from({length: RESOLUTION}, _ => Array(RESOLUTION).fill(null));

    grid = setShip(grid)
    grid = setShip(grid)
    grid = setShip(grid)
    grid = setShip(grid)

    console.table(grid)
    return grid
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
        {/* <Grid {...{win, setWin, showError}} /> */}
        {/* <RightBar {...{reset}} /> */}
        <Error error={error} />          
      </div>
    </div>
  );
}

export default App;
