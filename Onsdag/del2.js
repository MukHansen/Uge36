console.log("1)");
//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
  return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
  return n1 - n2
}

var mul = function (n1, n2) {
  return n1 * n2;
}

var div = function (a, b) {
  return a / b;
}

//Callback example
var cb = function (n1, n2, callback) {
  if (
    typeof n1 === "number", //Will fail if n1 is undefined, or is not a number
    typeof n2 === "number", //Will fail if n1 is undefined, or is not a number
    typeof callback === "function" //Will fail if callback is undefined or is not a function
  ) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
  }
};

console.log("2)");
//Call the functions above as sketched below. 
//It’s not about doing it as fast as you can, 
//but about understanding what's happening, so make sure you understand each line.
console.log("2,1. " + add(1, 2))     // What will this print?
// Dette vil kalde metoden add, og derfor lægge de 2 tal sammen og udskrive resultatet 3.
console.log("2,2... " + add)          // What will it print and what does add represent?
// udskriver funktionen selve "add"
console.log("2,3... " + add(1, 2, 3)); // What will it print
// kalder metoden add som i 2,1 men ignorere 3'tallet
console.log("2,4... " + add(1));      // What will it print    
// gætter på at den vil bede om mere info
console.log("2,5... " + cb(3, 3, add)); // What will it print
// kalder metoden cb, der kigger på hvilken funktion den får med som argument, her får den "add" den lægger derfor 3 og 3 
// sammen og printer "Result from the two numbers: 3+3=6"
console.log("2,6... " + cb(4, 3, sub)); // What will it print
// samme som ovenfor, her trækker den bare tallene 4 og 3 fra hinanden og printer derfor
// "Result from the two numbers: 4+3=1"
try {
  console.log("2,7... " + cb(3, 3, add())); // What will it print (and what was the problem)
  // fejler da den leder efter en funktion i "add()" skulle bare være "add"
} catch (e) {
  console.log(e.cb + ': ' + "Wrong or not enough arguments");
}

console.log("2,8... " + cb(3, "hh", add));// What will it print
// "Result from the two numbers: 3+hh=3hh"

console.log("4)");
console.log(cb(4, 5, mul));
console.log("5)");
console.log(cb(20, 4, div));

// Getting comfortable with filter, map and forEach;
console.log("--------------");

console.log("1)");
var dudes = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const lessDudes = dudes.filter(d => d.length >= 3);
console.log(dudes);
console.log(lessDudes);

console.log("2)");
newDudes = dudes.map(function(x){ return x.toUpperCase() })
console.log(newDudes);

console.log("3)");
function newHtml(arr) {
  return "<ul><li>" + arr.join("</li><li>") + "</li><ul>";
}
console.log(newHtml(dudes));
console.log("4)");
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//const newer = cars.filter(function(cars){
//  return cars[1] > 1999;
//});
var newer = cars.filter(year => year > 1999);
console.log("newerArr " + newer);
var volvoArray = cars.filter(make => make === 'Volvo');
console.log("volvoArr " + volvoArray);
var cheaper = cars.filter(price => price < 5000);
console.log("cheaperArr " + cheaper);

//---------------------------
//Asynchronous Callbacks
//var msgPrinter = function(msg,delay){
 // setTimeout(function(){
 //   console.log(msg);
 // },delay);
//};
//console.log("aaaaaaaaaa");
//msgPrinter ("bbbbbbbbbb",2000);
//console.log("dddddddddd");
//msgPrinter ("eeeeeeeeee",1000);
//console.log("ffffffffff");
// --------------------------------
// vil forvente at se outputtet i følgende rækkefølge a,d,f,e,b