import React, { useEffect, useState } from "react";

function Cell({value, onClick}) {
  return (
    <div
        className={'cell cell-' + value}
        onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Cell;