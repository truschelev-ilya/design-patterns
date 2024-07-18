class Issues {
    constructor() {
        this.issues = []
    }

    reply(issue) {}

    add(issue) {
        this.issues.push(issue)
        return this.reply(issue)
    }
}

class ProductIssues extends Issues {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceIssues extends Issues {
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`
    }
}

class IssueRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let issue

        if (type === 'service') {
            issue = new ServiceIssues()
        } else {
            issue = new ProductIssues()
        }

        return issue.add({id, customer, details})
    }
}

const registry = new IssueRegistry()

console.log(registry.register('Ivan', 'service', 'недоступен'))
console.log(registry.register('Petr', 'product', 'вылазит ошибка'))
