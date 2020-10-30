import React from "react"

class Dice extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            value:0
        }
    }

    render() {
        return (
            <div className="Dice">
                Dice: {this.props.value}
            </div>
        );
    }

    roll() {
        let value = Math.ceil( Math.random() * 8 )
        this.setState( {value: value} )
    }
}

export default Dice