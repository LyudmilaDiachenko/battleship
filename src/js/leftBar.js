import React from "react";

function leftBar({resolution, setResolution}) {
  return (
    <div className="aside aside-left">
          <label>
            <input type="radio" checked={resolution===2} onChange={_=>setResolution(2)}/>
            2x2
        </label>
        <label>
            <input type="radio" checked={resolution===3} onChange={_=>setResolution(3)}/>
            3x3
        </label>
        <label> 
            <input type="radio" checked={resolution===4} onChange={_=>setResolution(4)}/>
            4x4
        </label>
        <label>
            <input type="radio" checked={resolution===5} onChange={_=>setResolution(5)}/>
            5x5
        </label>
    </div>
  );
}

export default leftBar;