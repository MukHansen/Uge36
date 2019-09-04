//Create the two arrays below, spelled exactly as they are given.
//This will form the start for all the following questions.
console.log("a)");
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
console.log(boys + girls);

//Create a new array called all, which should be a concatenation of the two arrays 
//given above, starting with the boys and ending with the girls.
console.log("b)");
var all = boys.concat(girls);
console.log(all);

//Create a comma separated string containing all the names from the all-array, separated by commas.
console.log("c1)");
var comma = all.join(',');
console.log(comma);

//Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
console.log("c2)");
var hyphen = all.join('-');
console.log(hyphen);

//Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
console.log("d)");
girls.push('Lone', 'Gitte');
console.log(girls);

// Add the names Hans and Kurt to the start of the array
console.log("e)");
boys.unshift('Hans', 'Kurt');
console.log(boys);

//Remove the first name in the array (Hans)
console.log("f)");
boys.shift();
console.log(boys);

//Remove the last name from the array (Gitte)
console.log("g)");
girls.pop();
console.log(girls);

//Remove Ole and Janne from the middle of the array
console.log("h)");
all.splice(2,2);
console.log(all);

//Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
console.log("i)");
all.reverse();
console.log(all);

//Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
console.log("j)");
all.sort();
all.reverse();
console.log(all);

//The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not. 
//Write a user-defined sort method to fix this problem.
console.log("k)");
all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(all);

//Convert all the names in the array to uppercase.
console.log("l)");
all = all.map(function(x){ return x.toUpperCase() })
console.log(all);

//Create a new array containing all the names that start with either “l” or “L” 
//(hint: use the filter function with a sufficient callback). 

//Bruger "L" og "P" istedet for “l” og “L”
console.log("m)");
const result = all.filter(name => name.charAt(0) === "L" || name.charAt(0) === "P");
console.log(result);

