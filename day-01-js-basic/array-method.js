// // const numbers = [1, 2, 3]

// // const doubled = numbers.map(num => num * 2)

// // console.log(doubled)

// const mutasi = ["pos jaga", "patroli"]
// const label = mutasi.map(mutasis => `Lembar : ${mutasis}`)
// // const items = mutasi.map(form => `Form: ${form}`)

// console.log(label)

// const numbers = [1, 2, 3, 4, 5]

// const even = numbers.filter(num => num % 2 === 0)

// console.log(even)

// const users = [
//     {name: "Erlang", role: "Admin"},
//     {name: "Alif", role: "User"},
//     {name: "Pandu", role: "Admin"}
// ]

// const admins = users.filter(u=>u.role === "Admin")
// console.log(admins)

// const numberss = [10, 20, 30]

// const total = numberss.reduce((acc, num) => acc + num, 0)

// console.log(total)

// const numbersss = [1, 2, 3, 4, 5]

// const result = numbersss
//   .filter(n => n > 4)
//   .map(n => n * 20)

// console.log(result)

const forms = [
  { name: "Mutasi", active: true },
  { name: "Patroli", active: false },
  { name: "Buku Tamu", active: true }
]

// 1. Ambil form yang aktif
const activeForms = forms.filter(f => f.active)

// 2. Ubah jadi array nama form
const formNames = activeForms.map(f => f.name)

// 3. Hitung total form aktif
const totalActive = activeForms.reduce((acc) => acc + 1, 0)

console.log("Active Forms:", formNames)
console.log("Total:", totalActive)
