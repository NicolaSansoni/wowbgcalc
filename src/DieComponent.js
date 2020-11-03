import React from "react"
import "./DieComponent.css"

function DieComponent(props) {
    let attributes = ' ' + props.die.color
    if (props.die.isSelected) {
        attributes += ' disabled'
    } else if (props.die.isHit) {
        attributes += ' glow'
    }

    return (
        <div className={"Die" + attributes} onClick={()=> props.onClick()}>
            {props.die.value}
        </div>
    )
}

export default DieComponent