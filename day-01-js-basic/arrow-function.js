
const salam = (name) => "Hello " + name

console.log(salam("erlang"))

const add = (a, b) => a + b

console.log(add(10, 5)) // 15

const greet = (name) => {
    name="alip"
    return name
}

console.log("halo", greet())

const sayHi = () => {
    console.log("Hi!")
}

console.log(sayHi)

const calculate = (tax, payment) => {
    total = tax + payment
    return total
}

console.log(calculate(12000, 88000 ))

const number = [1,2,3,4]
const doubled = number.map(num=>num*2)

console.log(doubled)