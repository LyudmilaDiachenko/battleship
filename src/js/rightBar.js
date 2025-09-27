import React from "react";

function RightBar({reset, theme, setTheme}){
  function generateThemes(){
    const themesCount = 8
    const squeare = Math.ceil(Math.sqrt(themesCount + 1))
    let divatoz = []
    for(let i = 0; i<=themesCount; i++){
      divatoz.push(
        <>
          <input key={"theme-check-"+i} id={"check-"+i} type="radio" checked={theme===i} onChange={_=>setTheme(i)} />
          <label key={"theme-cell-"+i} htmlFor={"check-"+i} className={"cell theme-"+i} style={{backgroundImage: `url("/media/${i}.jpg")`, width: 100/squeare + "%"}} />
        </>
      )
    }
    return divatoz
  }

  return (
    <div className="aside aside-right">
        <div className="themes">
          {generateThemes()}
        </div>
          <div>
            <button onClick={reset}>
              Почати заново
          </button>  
        </div>
    </div>
  );
}

export default RightBar;