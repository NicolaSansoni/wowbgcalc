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
            listGreen: { list: Array(0), color: 'green' },
            listReroll: { list: Array(0) }
        }
    }

    render() {
        let rerollStyle = {visibility: 'visible'}
        if (this.state.listReroll.list.length === 0) {
            rerollStyle = {visibility: 'hidden'}
        }

        return (
            <div className="App">
                <div className="App-page">
                    <DiceList
                        items={this.state.listBlue}
                        addDice={() => this.addDice(this.state.listBlue)}
                        removeDice={() => this.removeDice(this.state.listBlue)}
                        onDiceClick={(dice) => this.selectDice(dice)}
                    />
                    <DiceList
                        items={this.state.listRed}
                        addDice={() => this.addDice(this.state.listRed)}
                        removeDice={() => this.removeDice(this.state.listRed)}
                        onDiceClick={(dice) => this.selectDice(dice)}
                    />
                    <DiceList
                        items={this.state.listGreen}
                        addDice={() => this.addDice(this.state.listGreen)}
                        removeDice={() => this.removeDice(this.state.listGreen)}
                        onDiceClick={(dice) => this.selectDice(dice)}
                    />
                    <button id="roll" onClick={ () => this.roll()}> Tira i dadi </button>
                    <DiceList
                        items={this.state.listReroll}
                        onDiceClick={(dice) => this.deselectDice(dice)}
                    />
                    <button id="roll" onClick={ () => this.reroll()} style={rerollStyle}> Nuovo Tiro </button>
                </div>
            </div>
        )
    }


    addDice(coloredList) {
        let len = coloredList.list.length
        if (len === 7) {
            console.log("lista piena!")
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
            console.log("lista vuota!")
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
                dice.isSelected = false 
            }

            //SORTING FOR EASIER UNDERSTANDING
            list.sort( (a, b) => b.value - a.value )
        }
        let newState = Object.assign({}, this.state)
        newState.listBlue.list = lists[0]
        newState.listRed.list = lists[1]
        newState.listGreen.list = lists[2]
        newState.listReroll.list = Array(0)
        
        this.setState(newState)

    }

    reroll() {
        let list = this.state.listReroll.list.slice()
        console.log(list)
        for (let dice of list) {
            dice.roll()
        }

        list.sort( Dice.compare )

        let newState = Object.assign({}, this.state)
        newState.listReroll.list = list
        this.setState(newState)
    }

    selectDice(dice) {
        if (dice.isSelected) {
            return
        }
        let diceCopy = Object.assign(new Dice(), dice)
        let list = this.state.listReroll.list.slice()
        list.push(diceCopy)
        list.sort( Dice.compare )
        
        dice.isSelected = true

        let newState = Object.assign({}, this.state)
        newState.listReroll.list = list
        this.setState(newState)
    }

    deselectDice(dice) {
        let found = false
        let lists = [
            this.state.listBlue.list.slice(), 
            this.state.listRed.list.slice(),
            this.state.listGreen.list.slice()
        ]
        for (let list of lists) {
            for (let d of list) {
                if (d.id === dice.id) {
                    found = true
                    if (!d.isSelected) alert("Il programmatore non è capace pt2 :'(")
                    d.isSelected = false
                }
            }
        }
        if (!found) alert("Il programmatore non è capace :'(")

        let list = this.state.listReroll.list.filter((d)=> d !== dice)

        let newState = Object.assign({}, this.state)
        newState.listReroll.list = list
        this.setState(newState)
    }
}

export default App;
