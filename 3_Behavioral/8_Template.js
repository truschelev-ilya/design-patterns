class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {

    }

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} получает ${this.salary}`
    }
}

class Developer extends Employee{
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'задачи разработки'
    }
}

class Tester extends Employee{
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'тестирование'
    }
}

const dev = new Developer('Petr', 100)
console.log(dev.getPaid())
console.log(dev.work())
const tester = new Tester('Ivan', 50)
console.log(tester.getPaid())
console.log(tester.work())
