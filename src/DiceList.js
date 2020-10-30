import React from "react"
import DiceButtons from "./DiceButtons"
import Dice from "./Dice"

class DiceList extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            list: Array(0),
            amount: 0,
        }
    }

    render() {
        return (
            <div className="DiceList">
                <DiceButtons
                    onClickPlus = { () => this.addDice()}
                    onClickMinus = { () => this.removeDice()}
                />
                <ul>
                    { this.state.list.map( (x) => 
                        <li>
                        <Dice value={x}/>
                        </li> 
                    )}
                </ul>
            </div>
        );
    }
    
    addDice() {
        if (this.state.amount === 7) {
            alert("lista piena!")
            return
        }
        let newAmount = this.state.amount + 1;
        const newList = this.state.list.slice()
        newList.push(newAmount)
        this.setState({
            list: newList,
            amount: newAmount,
        })
    }
    
    removeDice() { 
        if (this.state.amount === 0) {
            alert("lista vuota!")
            return
        }
    
        let newAmount = this.state.amount - 1
        const newList = this.state.list.slice()
        newList.pop()
        this.setState({
            list: newList,
            amount: newAmount,
        })
    }

}

export default DiceList