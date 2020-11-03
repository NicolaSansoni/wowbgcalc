import './App.css';
import React from 'react'
import Die from "./Die"
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
                    <div className="input-field">
                        <label htmlFor="threat">
                            Minaccia:
                            <input 
                                id="threat" 
                                type="number" 
                                onChange={(e) => this.onThreatChange(e)}
                                min="0" max="8"/>
                        </label>
                    </div>
                    <DiceList
                        items={this.state.listBlue}
                        addDie={() => this.addDie(this.state.listBlue)}
                        removeDie={() => this.removeDie(this.state.listBlue)}
                        onDieClick={(die) => this.selectDie(die)}
                    />
                    <DiceList
                        items={this.state.listRed}
                        addDie={() => this.addDie(this.state.listRed)}
                        removeDie={() => this.removeDie(this.state.listRed)}
                        onDieClick={(die) => this.selectDie(die)}
                    />
                    <DiceList
                        items={this.state.listGreen}
                        addDie={() => this.addDie(this.state.listGreen)}
                        removeDie={() => this.removeDie(this.state.listGreen)}
                        onDieClick={(die) => this.selectDie(die)}
                    />
                    <button id="roll" onClick={ () => this.roll()}> Tira i dadi </button>
                    <DiceList
                        items={this.state.listReroll}
                        onDieClick={(die) => this.deselectDie(die)}
                    />
                    <button id="roll" onClick={ () => this.reroll()} style={rerollStyle}> Nuovo Tiro </button>
                </div>
            </div>
        )
    }


    addDie(coloredList) {
        let len = coloredList.list.length
        if (len === 7) {
            console.log("lista piena!")
            return
        }
        const newList = {list: coloredList.list.slice(), color: coloredList.color}
        newList.list.push(new Die(newList.color, 0))
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

    removeDie(coloredList) {
        let len = coloredList.list.length
        if (len === 0) {
            console.log("lista vuota!")
            return
        }
        const newList = {list: coloredList.list.slice(), color: coloredList.color}
        let removedDie = newList.list.pop()

        let listReroll = this.state.listReroll.list.slice().filter((d) => d.id !== removedDie.id)

        let newState = null
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
        
        newState.listReroll.list = listReroll
        this.setState(newState)
    }

    roll() {
        let lists = [
            this.state.listBlue.list.slice(), 
            this.state.listRed.list.slice(),
            this.state.listGreen.list.slice()
        ]
        for (let list of lists) {
            for (let die of list) {
                die.isSelected = false 
                die.roll()
                if (this.state.threatValue > 0 && die.value > this.state.threatValue) {
                    die.isHit = true
                } else {
                    die.isHit = false
                }
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
        for (let die of list) {
            die.roll()
            if (this.state.threatValue > 0 && die.value > this.state.threatValue) {
                die.isHit = true
            } else {
                die.isHit = false
            }
        }

        list.sort( Die.compare )

        let newState = Object.assign({}, this.state)
        newState.listReroll.list = list
        this.setState(newState)
    }

    selectDie(die) {
        if (die.isSelected) {
            return
        }
        let dieCopy = Object.assign(new Die(), die)
        let list = this.state.listReroll.list.slice()
        list.push(dieCopy)
        list.sort( Die.compare )
        
        die.isSelected = true

        let newState = Object.assign({}, this.state)
        newState.listReroll.list = list
        this.setState(newState)
    }

    deselectDie(die) {
        let found = false
        let lists = [
            this.state.listBlue.list.slice(), 
            this.state.listRed.list.slice(),
            this.state.listGreen.list.slice()
        ]
        for (let list of lists) {
            for (let d of list) {
                if (d.id === die.id) {
                    found = true
                    if (!d.isSelected) alert("Il programmatore non è capace pt2 :'(")
                    // If the die was cast again already then don't allow the deselection
                    if(d.value !== die.value) return
                    d.isSelected = false
                }
            }
        }
        if (!found) alert("Il programmatore non è capace :'(")

        let list = this.state.listReroll.list.filter((d)=> d !== die)

        let newState = Object.assign({}, this.state)
        newState.listReroll.list = list
        this.setState(newState)
    }

    onThreatChange(event) {
        let threatValue = event.target.value
        let lists = [
            this.state.listBlue.list.slice(), 
            this.state.listRed.list.slice(),
            this.state.listGreen.list.slice(),
            this.state.listReroll.list.slice()
        ]
        for (let list of lists) {
            for (let die of list) {
                if (threatValue > 0 && die.value > threatValue) {
                    die.isHit = true
                } else {
                    die.isHit = false
                }
            }
        }
        let newState = Object.assign({}, this.state)
        newState.listBlue.list = lists[0]
        newState.listRed.list = lists[1]
        newState.listGreen.list = lists[2]
        newState.listReroll.list = lists[3]
        newState.threatValue = threatValue
        this.setState(newState)
    }
}

export default App;
