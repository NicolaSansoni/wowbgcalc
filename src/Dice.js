import React from "react"

class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:0
        }
    }

    roll() {
        let value = Math.ceil( Math.random() * 8 )
        this.setState( {value: value} )
    }

    render() {
        return (
            <div className="Dice">
                Dice: {this.state.value}
            </div>
        );
    }
}

export default Dice