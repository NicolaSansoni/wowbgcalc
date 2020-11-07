import './App.css';
import React from 'react'
import Die from "./Die"
import DiceList from './DiceList'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listBlue: Array(0),
            listRed: Array(0),
            listGreen: Array(0),
            listReroll: Array(0)
        }
    }

    render() {
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
                                min="0" max="8" />
                        </label>
                    </div>

                    {/* LISTS OF DICE */}
                    <div className="App-dice">
                        {[this.state.listBlue, this.state.listRed, this.state.listGreen].map((x, index) => {
                            let colors = [Die.Colors.BLUE, Die.Colors.RED, Die.Colors.GREEN]
                            let color = colors[index]
                            return (
                                <DiceList
                                    items={x}
                                    addDie={() => this.addDie(x, color)}
                                    removeDie={() => this.removeDie(x)}
                                    onDieClick={(die) => this.selectDie(die)}
                                    color={color}
                                    isRolling={this.state.rollCount > 0}
                                    stopRolling={()=>this.setState(Object.assign(this.state, {rollCount: 0}))}
                                />
                            )
                        })}
                        <button className="rollbtn" onClick={() => this.roll()}> Tira i dadi </button>
                    </div>

                    {/* REROLL LIST ONLY SHOWN WHEN THERE ARE DICE INSIDE */}
                    {this.state.listReroll.length > 0 &&
                        <div className="App-reroll">
                            <DiceList
                                items={this.state.listReroll}
                                onDieClick={(die) => this.deselectDie(die)}
                                isRolling={this.state.rerollCount > 0}
                                stopRolling={()=>this.setState(Object.assign(this.state, {rerollCount: 0}))}
                            />
                            <button className="rollbtn" onClick={() => this.reroll()}> Nuovo Tiro </button>
                        </div>
                    }
                </div>
            </div>
        )
    }


    addDie(list, color) {
        let len = list.length
        if (len === 7) {
            console.log("lista piena!")
            return
        }
        list.push(new Die(color))
        this.forceUpdate()
    }

    removeDie(list) {
        let len = list.length
        if (len === 0) {
            console.log("lista vuota!")
            return
        }
        let removedDie = list.pop()
        let newList = this.state.listReroll.slice().filter((d) => d.id !== removedDie.id)
        this.setState(newList)
    }

    roll() {
        let lists = [
            this.state.listBlue.slice(),
            this.state.listRed.slice(),
            this.state.listGreen.slice()
        ]
        for (let list of lists) {
            for (let die of list) {
                die.isSelected = false
                die.roll()
            }

            //SORTING FOR EASIER UNDERSTANDING
            list.sort((a, b) => b.value - a.value)
        }
        let newState = { ...this.state }
        newState.listBlue = lists[0]
        newState.listRed = lists[1]
        newState.listGreen = lists[2]
        newState.listReroll = Array(0)
        newState.rollCount = lists.flat().length

        this.setState(newState)

        this.checkThreat(this.state.threat)
    }

    reroll() {
        let list = this.state.listReroll.slice()
        for (let die of list) {
            die.roll()
        }
        
        list.sort(Die.compare)
        
        let newState = {...this.state}
        newState.listReroll = list
        newState.rerollCount = list.length
        this.setState(newState)

        this.checkThreat(this.state.threat)
    }

    selectDie(die) {
        if (die.isSelected) {
            return
        }
        let dieCopy = Object.assign(new Die(), die) /// ... operator doesn't copy functions apparently
        let list = this.state.listReroll.slice()
        list.push(dieCopy)
        list.sort(Die.compare)

        die.isSelected = true

        let newState = {...this.state}
        newState.listReroll = list
        this.setState(newState)
    }

    deselectDie(die) {
        let found = false
        let lists = [
            this.state.listBlue.slice(),
            this.state.listRed.slice(),
            this.state.listGreen.slice()
        ]
        for (let list of lists) {
            for (let d of list) {
                if (d.id === die.id) {
                    found = true
                    if (!d.isSelected) alert("Il programmatore non è capace pt2 :'(")
                    // If the die was cast again already then don't allow the deselection
                    if (d.value !== die.value) return
                    d.isSelected = false
                }
            }
        }
        if (!found) alert("Il programmatore non è capace :'(")

        let list = this.state.listReroll.filter((d) => d !== die)

        let newState = {...this.state}
        newState.listReroll = list
        this.setState(newState)
    }

    onThreatChange(event) {
        let threatValue = event.target.value
        this.checkThreat(threatValue)
        let newState = {...this.state}
        newState.threat = threatValue
        this.setState(newState)
    }

    checkThreat(threat) {
        let lists = [
            this.state.listBlue,
            this.state.listRed,
            this.state.listGreen,
            this.state.listReroll
        ]
        for (let list of lists) {
            for (let die of list) {
                if (threat > 0 && die.value > threat) {
                    die.isHit = true
                } else {
                    die.isHit = false
                }
            }
        }
        this.forceUpdate()
    }
}

export default App;
