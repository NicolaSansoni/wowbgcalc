import React from "react"
import DiceComponent from "./DiceComponent"
import './DiceList.css'

function DiceList(props) {
    let color = "black"
    if ('color' in props.items) {
        color = props.items.color
    }

    const diceList = props.items.list.map((x) =>
        <li key={x.id}>
            <DiceComponent dice={x} />
        </li>
    )

    return (
        <div className={"DiceList " + color}>
            <div className="DiceList-buttons">
                <button onClick={() => props.addDice()}> + </button>
                <button onClick={() => props.removeDice()}> - </button>
            </div>

            <ul>{diceList}</ul>
        </div>
    )
}

export default DiceList