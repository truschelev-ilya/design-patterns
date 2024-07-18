class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(subscribe) {
        this.observers.push(subscribe)
    }

    unsubscribe(subscribe) {
        this.observers = this.observers.filter(observer => observer !== subscribe)
    }

    fire(action) {
        this.observers.forEach(observer => observer.update(action))
    }
}


class Observer {
    constructor(state = 0) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch (action.type) {
            case "INCREMENT":
                this.state = ++this.state
                break
            case "DECREMENT":
                this.state = --this.state
                break
            default:
                this.state = this.initialState
                break
        }
    }
}

const stream = new Subject()

const observer1 = new Observer()
const observer2 = new Observer(2)

stream.subscribe(observer1)
stream.subscribe(observer2)

console.log(observer1.state)
console.log(observer2.state)

stream.fire({type: "INCREMENT"})

console.log(observer1.state)
console.log(observer2.state)
