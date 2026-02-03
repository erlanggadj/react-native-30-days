// =======================
// LET & CONST PRACTICE
// =======================

// 1. const tidak bisa di-assign ulang
const appName = "React Native 30 Days"
console.log("App:", appName, "\n")

// UNCOMMENT baris di bawah untuk lihat error
// appName = "New App"


// 2. let bisa diubah
let counter = 0
console.log("Counter:", counter)

counter = counter + 1
console.log("Counter after increment:", counter)


// 3. const object (isi boleh berubah)
const user = {
  name: "Erlangga",
  age: 20
}

user.age = 21
console.log("User:", user)


// 4. const array (isi boleh berubah)
const numbers = [1, 2, 3]
numbers.push(4)

console.log("Numbers:", numbers)


// 5. Block scope
if (true) {
  let message = "Hello from block"
  console.log(message)
}

// UNCOMMENT baris ini untuk lihat error
// console.log(message)

console.log("Result:", 10 + 5)
console.log("Result:" + 10 + 5)
console.log(`Result: ${10 + 5}`)
