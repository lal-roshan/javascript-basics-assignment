// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

let fruitsList = [];
fruitsList.push({ name: "apple", color: "red", pricePerKg: 120.00 });
fruitsList.push({ name: "apple", color: "green", pricePerKg: 180.00 });
fruitsList.push({ name: "orange", color: "orange", pricePerKg: 100.00 });
fruitsList.push({ name: "grapes", color: "green", pricePerKg: 110.00 });
fruitsList.push({ name: "grapes", color: "blue", pricePerKg: 90.00 });
fruitsList.push({ name: "grapes", color: "red", pricePerKg: 100.00 });

let fruits = {};

//for each element in fruitsList we seperate the name field and the rest of its properties
fruitsList.forEach(element => {
    let { name, ...properties } = element;

    //If the result list has a key with the current fruit name, then its a different variety of the
    //same fruit and needs to be added under same key
    if (fruits.hasOwnProperty(name)) {
        fruits[name].push(properties);
    }
    else {
        fruits[name] = new Array(properties);
    }
});

console.log(fruits.apple);
console.log(fruits.orange);
console.log(fruits.grapes);

