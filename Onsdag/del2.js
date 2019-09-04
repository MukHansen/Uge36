//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

//Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};
