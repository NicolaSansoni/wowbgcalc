class Observable {
    constructor() {
        this.subscribers = new Map()
    }

    notify() {
        for(let a of this.subscribers.values()) {
            a()
        }
    }

    subscribe(id, action) {
        this.subscribers.set(id, action)
    }

    unsubscribe(id) {
        this.subscribers.delete(id)
    }

}

export default Observable