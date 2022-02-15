const modifiedObjects = require("./objects.practice");

function list(req, res) {
  res.status(200).json({
    data: {
      simpleObject: modifiedObjects.simpleObject,
      objectOfArrays: modifiedObjects.objectOfArrays,
      nestedObject: modifiedObjects.nestedObject
    }
  })
}

module.exports = {
  list
}