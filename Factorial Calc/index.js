const num = prompt("enter a number to find the factorial of");

function factorialOf(num) {
  if (num < 0) {
    console.log("number should be positive number");
  }
  let result = 1;
  for (let i = 0; (i = num); i++) {
    result *= i;
  }
  return result;
}

alert(result);
