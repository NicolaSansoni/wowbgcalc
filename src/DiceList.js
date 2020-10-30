import React from "react"
import DiceButtons from "./DiceButtons"
import Dice from "./Dice"

class DiceList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: Array(0),
        }
    }

    render() {
        return (
            <div className="DiceList">
                <DiceButtons/>
                <ul>
                    { this.state.list.map( () => this.renderDice() ) }
                </ul>
            </div>
        );
    }

    renderDice() {
        return(
            <li>
                <Dice/>
            </li>
        )
    }
}

export default DiceList