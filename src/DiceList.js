import React from "react"
import DieComponent from "./DieComponent"
import './DiceList.css'

function DiceList(props) {
    function Buttons() {
        return (
            <div className="DiceList-buttons">
                <button onClick={() => props.addDie()} disabled={props.items.length === 7}> + </button>
                <button onClick={() => props.removeDie()} disabled={props.items.length === 0}> - </button>
            </div>
        )
    }

    return (
        <div className={`DiceList ${props.color || ''}`}>
            {props.addDie && props.removeDie && <Buttons/>}
            <ul>
                {props.items.map((x) =>
                    <li key={x.id}>
                        <DieComponent die={x} onClick={() => props.onDieClick(x)}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default DiceList