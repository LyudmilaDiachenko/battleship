import React from "react";

function RightBar({reset}){
  return (
    <div className="aside aside-right">
          <div>
            <button onClick={reset}>
              Почати заново
          </button>  
        </div>
    </div>
  );
}

export default RightBar;