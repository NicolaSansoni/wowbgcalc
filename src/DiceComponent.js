import React from "react"
import "./DiceComponent.css"

function DiceComponent(props) {
    let attributes = ' ' + props.dice.color
    if (props.dice.isSelected) {
        attributes += ' disabled'
    }

    return (
        <div className={"Dice" + attributes} onClick={()=> props.onClick()}>
            {props.dice.value}
        </div>
    )
}

export default DiceComponent