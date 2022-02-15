const objectsSeed = require("./objects.seed");
const simpleObject = objectsSeed.simpleObject;
const objectOfArrays = objectsSeed.objectOfArrays;
const nestedObject = objectsSeed.nestedObject;

// By default, find these objects at localhost:5000/objects

// Modify the simple object
function modifySimpleObject() {
  return;
}

// Modify the object containing arrays
function modifyObjectOfArrays() {
  return;
}

// Modify the nested object
function modifyNestedObject() {
  return;
}

// Run practice functions
modifySimpleObject();
modifyObjectOfArrays();
modifyNestedObject();

module.exports = {
  simpleObject,
  objectOfArrays,
  nestedObject
}