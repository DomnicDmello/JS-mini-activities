let random = Math.random();

console.log(random);
let a = prompt("Enter first Number");
let c = prompt("Type of operation");
let b = prompt("Enter second Number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.5) {
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
