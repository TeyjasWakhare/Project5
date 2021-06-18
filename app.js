const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    
    rating: 10,
    review: "Peaches are great."
});

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const mango = new Fruit({
//     name: "Mango",
//     rating: 10,
//     review: "King Of Fruits!!"
// });

// mango.save();

// Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully updated!!");   
//     }
// });

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Too sour.."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB.");
//     }
// });

Fruit.find(function(err, fruits) {
    if(err) {
        console.log(err);
    } else {
        
        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "60c0e9659b97482fe8a4d010"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully updated  the document.");
//     }
// });

// Fruit.deleteOne({name: "Mango"}, function(err){
//     if(err) {
//         console.log(err);
//     } else{
//         console.log("Successfully deleted!!");
//     }
// });


