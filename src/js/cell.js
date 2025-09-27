import React, { useEffect, useState } from "react";

function Cell({value, onClick, resolution, theme}) {
  const [bg, setBG] = useState('')

  useEffect(_=>{
    if (!theme) return setBG('data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
    const img = document.createElement("img")
    img.crossOrigin="anonymous"
    img.src = `/media/${theme}.jpg`

    img.onload = () => {
      const cellCanvas = document.createElement("canvas")
      const gridCanvas = document.createElement("canvas")
      const cellCanvasCtx = cellCanvas.getContext("2d")
      const gridCanvasCtx = gridCanvas.getContext("2d")
      
      gridCanvas.width = img.width
      gridCanvas.height = img.height
      gridCanvasCtx.drawImage(img, 0, 0, img.width, img.width)
      
      const cellSize = Math.floor(img.width / resolution)

      cellCanvas.width = cellSize
      cellCanvas.height = cellSize

      const bgIndex = value === null ? resolution * resolution - 1 : value
      const cn = bgIndex % resolution
      const rn = Math.trunc(bgIndex / resolution)

      cellCanvasCtx.putImageData(gridCanvasCtx.getImageData(cn * cellSize, rn * cellSize, cellSize, cellSize), 0,0)
      setBG(cellCanvas.toDataURL())
    }
  }, [theme, value])

  return (
    <div
        className={'cell cell-' + value}
        onClick={onClick}
        style={{backgroundImage: `url(${bg})`, opacity: value === null ? 0.2 : 1}}
    >
      {value!==null?value+1:value}
    </div>
  );
}

export default Cell;