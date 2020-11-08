import React, { useEffect, useRef, useState } from "react"
import "./DieComponent.css"

function DieComponent(props) {
    let [isRolling, setIsRolling] = useState(false)
    let ref = useRef()

    useEffect( () => {
        props.rollEvent.subscribe( ref, () => {
            setIsRolling(true)
        })
        return () => props.rollEvent.unsubscribe(ref)
    })

    let attributes = ' ' + props.die.color
    if (props.die.isSelected) {
        attributes += ' disabled'
    } else if (props.die.isHit) {
        attributes += ' glow'
    }

    if (isRolling) {
        attributes += ' roll'
    }

    return (
        <div ref={ref} className={"Die" + attributes} onClick={()=> props.onClick()} onAnimationEnd={() => setIsRolling(false)}>
            {props.die.value}
        </div>
    )
}

export default DieComponent