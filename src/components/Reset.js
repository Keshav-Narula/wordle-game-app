import React, { useContext } from "react";
import { AppContext } from "../App";



function Reset() {
    const { onReset } =
        useContext(AppContext);

    return (
        <div className="reset">
            <button className='resetButton' onClick={onReset}>RESET GAME</button>
        </div>
    );
}

export default Reset