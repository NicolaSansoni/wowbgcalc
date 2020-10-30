function DiceButtons(props) {
    return (
        <div>
            <button onClick={ () => props.onClickPlus() }>+</button>
            <button onClick={ () => props.onClickMinus() }>-</button>
        </div>
    )
}

export default DiceButtons