
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
//Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log("Stories: " + empireStateBuilding.stories + ", height: " + empireStateBuilding.height);

//Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
const aD = "address";
const sF = "squareFeet";
const cD = "constructionDate";
const cO = "cost";
const oW = "owner";

console.log(empireStateBuilding[aD]);
console.log(empireStateBuilding[sF]);
console.log(empireStateBuilding[cD]);
console.log(empireStateBuilding[cO]);
console.log(empireStateBuilding[oW]);












/*
Practice: Represent your Pet
Create an object that represents your pet.

Name property with a string value.
Species property with a string value.
Nicknames property with an array value. Array contains strings.
Age property with an integer value
*/
const pet = {
    name : "Rover",
    species : "dog",
    nicknames : ["rover the dog"],
    age : 5
}
//console.log(pet);

/*
The object should have a property named orders that is an array. You will need to define this.
Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
*/

const restaurant = {
    name: "Bob's Burgers",
    orders : [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getAllOrders: function (){
        console.log(this.orders);
    }
}

const chickenComboMeal = {
    sandwichType : "chicken",
    fries : "true",
    drinkSize : "M"
}
const burgerComboMeal = {
    sandwichType : "beef patty",
    fries : "true",
    drinkSize : "M"
}
const chickenSandwichOnly = {
    sandwichType : "chicken",
    fries : "false",
    drinkSize : "none"
}
const burgerOnly = {
    sandwichType : "beef patty",
    fries : "false",
    drinkSize : "none"
}
// Place an order
//restaurant.placeOrder(burgerOnly);

// Invoke the function to return the list of all orders


// Output all orders to the console using console.table()