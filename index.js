class Worker {
    TYPE_A = 'a'
    TYPE_B = 'b'

    constructor(obj) {
        this.type = obj.type
    }

    run() {
        this.attemptRunWork1()
        this.attemptRunWork2()
    }

    attemptRunWork1() {
        if (this.hasType(this.TYPE_A)) {
            console.log('Execute work 1')
        }
    }

    hasType(type) {
        return this.type === type
    }

    attemptRunWork2() {
        if (this.hasType(this.TYPE_B)) {
            console.log('Execute work 2')
        }
    }
}

const run = ({obj}) => {
    new Worker(obj).run()
}

const foo = {
    type: 'a',
}

const baz = {
    type: 'b',
}

run({obj: foo})
run({obj: baz})
