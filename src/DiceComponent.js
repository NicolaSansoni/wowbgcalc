import React from "react"
import Dice from "./Dice"
import "./DiceComponent.css"

function DiceComponent(props) {
    return (
        <div className={"Dice " + props.dice.color}>
            {props.dice.value}
        </div>
    )
}

export default DiceComponent