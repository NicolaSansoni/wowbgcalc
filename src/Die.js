class Die {

    static _count = 0;
    static _generateId() {
        Die._count++
        return Die._count - 1
    }
    static compare(a, b) {
        let evalColor = (col) => {
            switch (col) {
                case 'blue':
                    return 0
                case 'red':
                    return 1
                case 'green':
                    return 2
                default:
                    throw new Error("Die has no color!")
            }
        }

        let ev = evalColor(a.color) - evalColor(b.color)
        if (ev === 0) return (b.value - a.value)
        else return ev
    }

    constructor(color, value = 0) {
        this.color = color
        this.value = value
        this.faces = 8
        this.id = Die._generateId()
        this.isSelected = false
        this.isHit = false
    }

    roll() {
        let value = Math.ceil( Math.random() * this.faces )
        this.value = value
    }
}

export default Die 