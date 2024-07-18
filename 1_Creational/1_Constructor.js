class Member {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greeting() {
        return `Hi there! My name is ${this.name}, I'm ${this.age} years old.`
    }
}

const member = new Member("Ivan", 30)

console.log(member.greeting())
