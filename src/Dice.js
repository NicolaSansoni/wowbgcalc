class Dice {

    static _count = 0;
    static _generateId() {
        Dice._count++
        return Dice._count - 1
    }

    constructor(color, value = 0) {
        this.color = color
        this.value = value
        this.faces = 8
        this.id = Dice._generateId()
    }

    roll() {
        let value = Math.ceil( Math.random() * this.faces )
        this.value = value
    }
}

export default Dice 