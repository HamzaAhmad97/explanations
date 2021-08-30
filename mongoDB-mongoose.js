//initial setup

const mongoose = require('mongoose');

mongoose.connect('localORAtlasURL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => doSth()); // a good idea here is to log a message to confirm that the connection is established successfully

//------------------------------------------------------------------------

//schemas and models

const mySchema = new mongoose.Schema({
  key: {type: TYPE, default: value}, //primitives
  //structures/objects
  key: [TYPE],
  key: [{key: TYPE, key:TYPE}],
  key: {key: TYPE, key: TYPE}
  //...
})

const myModel = mongoose.model("collectionName", mySchema);

//------------------------------------------------------------------------

//retrieving data

//unique

myModel.find({identifier}, (err, result) => {
  if (err) doSth()
  else doSthElse()
})

//all -> no identifier

myModel.find({}, (err, result) => {
  if (err) doSth()
  else doSthElse()
})

//------------------------------------------------------------------------

//addition and creation 

let thing = new myModel({...modelData});
thing.save().then(val => doSth()).catch(err => doSthElse());

//------------------------------------------------------------------------

//updating

myModel.updateOne({identifier}, {key: newValue}, (err, result) => {
  if (err) doSth()
  else doSthElse()
})

//adding to an array

myModel.updateOne({identifier}, { $addToSet: {key: newValue}}, (err, result) => {
  if (err) doSth()
  else doSthElse()
}) //even if the new value contains an already existent child, it will not be added, in case you want to add that value no matter what you will have to check the other methods from the documentation

//you can also use .findByIdAndUpdate() and pass the id as _id


//------------------------------------------------------------------------

//deletion

myModel.findOneAndDelete({identifier}, (err) => {
  if (err) doSth()
  else doSthElse()
})

//you can also use other methods like findByIdAndRemove or findByIdAndDelete

//you might need to look other methods that delete values from an array or an object defined in the schema

