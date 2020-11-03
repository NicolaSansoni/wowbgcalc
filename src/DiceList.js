import React from "react"
import DieComponent from "./DieComponent"
import './DiceList.css'

function DiceList(props) {

    let color = ""
    if ('color' in props.items) color += " " + (props.items.color)

    const diceList = props.items.list.map((x) =>
        <li key={x.id}>
            <DieComponent die={x} onClick={() => props.onDieClick(x)}/>
        </li>
    )

    function Buttons() {
        if ('color' in props.items) {
            return (
                <div className="DiceList-buttons">
                    <button onClick={() => props.addDie()} disabled={props.items.list.length === 7}> + </button>
                    <button onClick={() => props.removeDie()} disabled={props.items.list.length === 0}> - </button>
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