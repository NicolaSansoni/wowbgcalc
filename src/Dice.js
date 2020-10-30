class Dice {

    constructor(color, value = 0) {
        this.color = color
        this.value = value
        this.faces = 8
    }

    roll() {
        let value = Math.ceil( Math.random() * this.faces )
        this.value = value
    }
}

export default Dice 