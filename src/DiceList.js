import React from "react"
import DiceComponent from "./DiceComponent"
import './DiceList.css'

function DiceList(props) {

    let color = ""
    if ('color' in props.items) color += " " + (props.items.color)

    const diceList = props.items.list.map((x) =>
        <li key={x.id}>
            <DiceComponent dice={x} onClick={() => props.onDiceClick(x)}/>
        </li>
    )

    function Buttons() {
        if ('color' in props.items) {
            return (
                <div className="DiceList-buttons">
                    <button onClick={() => props.addDice()} disabled={props.items.list.length === 7}> + </button>
                    <button onClick={() => props.removeDice()} disabled={props.items.list.length === 0}> - </button>
                </div>
            )
        }
        else return null
    }

    return (
        <div className={"DiceList" + color}>
            <Buttons/>
            <ul>{diceList}</ul>
        </div>
    )
}

export default DiceList