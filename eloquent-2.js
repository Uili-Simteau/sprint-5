//“#” Triangle
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

Fizz Buzz - just fizz and buzz
for (num = 1; num <=100; num ++) {
  if (num % 3 == 0) {
  console.log("Fizz");
  } else if (num % 5 == 0 && num % 3 != 0) {
    console.log("Buzz");
  } else console.log(num);
};

//FIzzBuzz
for (num = 1; num <=100; num ++) {
  if (num % 5 == 0 && num % 3 == 0) {
    console.log("FizzBuzz");
 } else if (num % 3 == 0) {
    console.log("Fizz");
 } else if (num % 5 == 0) {
    console.log("Buzz");
  } else console.log(num);
};

//online answer:
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

//Chess board - had to look at solution. Tricky use of counters
var size = 50;

var board = " ";
for (var y = 0; y <= size; y++) {
  for (var x = 0; x <= size; x++) {
    if ((y +x) % 2 == 0)
     board += " ";
    else board += "#";
  }
 board += "\n";
}
console.log(board);
