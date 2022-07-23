const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/peopleDB");

//collection schema
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name can't be empty"] },
  rating: Number,
  review: String
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, min: 1, max: 200 },
  favouriteFruit: fruitSchema
});

//model become collection plural name
const Fruit = mongoose.model("fruit", fruitSchema);
const Person = mongoose.model("Person", peopleSchema);

//insert data into collection
// const apple = new Fruit({ name: "apple", rating: 3, review: "Not good so much" });
// const orange = new Fruit({ name: "Orange", rating: 1, review: "too busy to peel" });

//document relationship
const cherry = new Fruit({ name: "Cherry", rating: 5, review: "Beautiful" });
const person = new Person({ name: "Wutyi", age: 20, favouriteFruit: cherry });

//insert 1 data
// people.save().then(() => console.log(" 1 data added"));
cherry.save();
person.save();

//close mongoose connection
mongoose.connection.close();

// Fruit.deleteOne({ name: "Cherry" }, function (err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Sucessfully deleted");
//   }
// });

// Fruit.updateOne({ name: "apple" }, { name: "Cherry" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Sucessfully updated the document.");
//   }
// });

// Fruit.insertMany([apple, orange], function (err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Inserted many");
//   }
// });

// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     fruits.forEach(fruit => console.log(fruit.name));
//   }
// });