// Destructuring In Object
const employee ={
    id: 1,
    name: "Md.Samiul Haque",
    age: 30,
    department: "Development",
    address:{
        country: "Bangladesh",
        city: "Dhaka",
    }
}

// The goal of destructure is not reapet 

//const name = employee.name;
//const age = employee.age;
//console.log(name);
//console.log(age);

// const {name, age} = employee;
//console.log(name);
//console.log(age);

// if variable need to change
//const {name: fullname, age} = employee;
//console.log(fullname);
//console.log(age);

// Set Deafault value
// const {name: fullname = "No Name Found", age} = employee;

// console.log(fullname);
// console.log(age);

// if need to access milti dimetion object
// const {address : {city} } = employee;
// console.log(city);


// Also Possible destructur in function
function displayEmployee(name, age){
    console.log(`The Employee Name : ${employee.name} & Age Is : ${employee.age}`);
}

// displayEmployee(employee);


// Destructuring In Array
const fruits = ['apple', 'banana', 'mango', 'pineapple'];

// const apple = fruits[0];
// const banana = fruits[1];

// const [apple, banana, ...other]= fruits;

// console.log(apple);
// console.log(banana);
// console.log(other);


//  Destructuring In Array & Object
const groceryList = [
    {item: 'Apple', price: 28, category: 'Fruits'},
    {item: 'Banana', price: 30, category: 'Fruits'},
    {item: 'Mango', price: 50, category: 'Fruits'},
    {item: 'Pineapple', price: 39, category: 'Fruits'},
    {item: 'Eagg', price: 40, category: 'Mise'},
    {item: 'Milk', price: 65, category: 'Mise'},
];

//console.log(groceryList[0].item);


// complete object
//const [apple] = groceryList;
//console.log(apple);


// const [ { item:apple } ] = groceryList;
// console.log(apple);

// skip first 2
// const [,,{item},...rest] = groceryList;
// console.log(item);
// console.log(rest);


const company = {
    name: "Google",
    locations: ["Bangladesh", "Nepal", "Pakistan"],
}

// console.log(company.locations[0]);

const {locations: [,loc]} = company;
console.log(loc);
