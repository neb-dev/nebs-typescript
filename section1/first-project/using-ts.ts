const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // ! indicates never will be null - as Type Casting
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value)); // + converts string to number
});
// run tsc using-ts.ts to compile to js