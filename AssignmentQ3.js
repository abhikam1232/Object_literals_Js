// Create an object person with their name, age and city.
// edit their city orignal value to change it to newyork:-
// Add new property country and set it to united states 


const person = {
    name: "John",
    age: 35,
    city: "Foster city",
};

console.log("This is the orignal object", person); // prints the org object 
person.city = "newYorkcity"; // edits the  city 
console.log(person);
person.country = "United States Of America";
console.log(person);