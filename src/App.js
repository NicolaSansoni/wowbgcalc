import './App.css';
import React from 'react'
import Dice from "./Dice"
import DiceList from './DiceList'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listBlue: { list: Array(0), color: 'blue' },
            listRed: { list: Array(0), color: 'red' },
            listGreen: { list: Array(0), color: 'green' }
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-page">
                    <DiceList
                        items={this.state.listBlue}
                        addDice={() => this.addDice(this.state.listBlue)}
                        removeDice={() => this.removeDice(this.state.listBlue)}
                    />
                    <DiceList
                        items={this.state.listRed}
                        addDice={() => this.addDice(this.state.listRed)}
                        removeDice={() => this.removeDice(this.state.listRed)}
                    />
                    <DiceList
                        items={this.state.listGreen}
                        addDice={() => this.addDice(this.state.listGreen)}
                        removeDice={() => this.removeDice(this.state.listGreen)}
                    />
                    <button id="roll" onClick={ () => this.roll()}> roll </button>
                </div>
            </div>
        )
    }


    addDice(coloredList) {
        let len = coloredList.list.length
        if (len === 7) {
            alert("lista piena!")
            return
        }
        const newList = {list: coloredList.list.slice(), color: coloredList.color}
        newList.list.push(new Dice(newList.color, len+1))
        let newState
        switch (coloredList.color) {
            case 'blue':
                newState = Object.assign({}, this.state, {listBlue: newList})
                break;
            case 'red':
                newState = Object.assign({}, this.state, {listRed: newList})
                break;
            case 'green':
                newState = Object.assign({}, this.state, {listGreen: newList})
                break;
            default:
                alert("not colored lists are not implemented")
        }
        this.setState(newState)
    }

    removeDice(coloredList) {
        let len = coloredList.list.length
        if (len === 0) {
            alert("lista vuota!")
            return
        }
        const newList = {list: coloredList.list.slice(), color: coloredList.color}
        newList.list.pop()
        let newState
        switch (coloredList.color) {
            case 'blue':
                newState = Object.assign({}, this.state, {listBlue: newList})
                break;
            case 'red':
                newState = Object.assign({}, this.state, {listRed: newList})
                break;
            case 'green':
                newState = Object.assign({}, this.state, {listGreen: newList})
                break;
            default:
                alert("not colored lists are not implemented")
        }
        this.setState(newState)
    }

    roll() {
        let lists = [
            this.state.listBlue.list.slice(), 
            this.state.listRed.list.slice(),
            this.state.listGreen.list.slice()
        ]
        for (let list of lists) {
            for (let dice of list) {
                dice.roll()
            }

            //SORTING FOR EASIER UNDERSTANDING
            list.sort( (a, b) => b.value - a.value )
        }
        let newState = Object.assign({}, this.state)
        newState.listBlue.list = lists[0]
        newState.listRed.list = lists[1]
        newState.listGreen.list = lists[2]
        
        this.setState(newState)
    }
}

export default App;
