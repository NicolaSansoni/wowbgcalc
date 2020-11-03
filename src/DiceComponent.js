import React from "react"
import "./DiceComponent.css"

function DiceComponent(props) {
    return (
        <div className={"Dice " + props.dice.color}>
            {props.dice.value}
        </div>
    )
}

export default DiceComponent