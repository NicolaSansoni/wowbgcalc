import React from "react"
import Dice from "./Dice"
import DiceComponent from "./DiceComponent"
import './DiceList.css'

class DiceList extends React.Component {
    
    constructor(props) {
        super(props)
        let color = "black"
        if ('color' in this.props) {
            color = this.props.color
        }
        this.state = {
            list: Array(0),
            amount: 0,
            color: color
        }
    }

    render() {
        const diceList = this.state.list.map( (x) => 
            <li key={x.toString()}>
                <DiceComponent dice={x}/>
            </li> 
        )
        return (
            <div className={"DiceList " + this.state.color}>
                <div className="DiceList-buttons">
                    <button onClick={ () => this.addDice() }> + </button>
                    <button onClick={ () => this.removeDice() }> - </button>
                </div>

                <ul>{diceList}</ul>
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
        newList.push(new Dice(this.state.color, newAmount))
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