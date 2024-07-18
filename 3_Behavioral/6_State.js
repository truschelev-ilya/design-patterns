class Light {
    constructor(light) {
        this.light = light
    }
}

class RedLight extends Light {
    constructor() {
        super("red");
    }

    sign() {
        return "СТОП"
    }
}

class YellowLight extends Light {
    constructor() {
        super("yellow");
    }

    sign() {
        return "ГОТОВЬСЯ"
    }
}

class GreenLight extends Light {
    constructor() {
        super("green");
    }

    sign() {
        return "ЕДЬ"
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]
        this.current = this.states[0]
    }

    change() {
        const index = this.states.findIndex(light => light === this.current)

        if (index + 1 < this.states.length) {
            this.current = this.states[index + 1]
        } else {
            this.current = this.states[0]
        }
    }

    sigh() {
        return this.current.sign()
    }
}

const traffic = new TrafficLight()

console.log(traffic.sigh())
traffic.change()
console.log(traffic.sigh())
traffic.change()
console.log(traffic.sigh())
traffic.change()
console.log(traffic.sigh())
traffic.change()
console.log(traffic.sigh())
