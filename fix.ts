const a = '1';

console.log(a)

let b: boolean | undefined = false

let c: boolean | undefined = true

c = undefined

let d = c || b

if (c || b) {
  console.log(a)
}
