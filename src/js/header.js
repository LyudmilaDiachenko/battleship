import React from "react";

function Header({win}){
    return (
        <div className="winBox">
            <h2>{win ? "Перемога" : ""}</h2>
        </div>
    )
}

export default Header;