const modifiedArrays = require("./arrays.practice");

function list(req, res) {
  res.status(200).json({
    data: {
      numberArray: modifiedArrays.numberArray,
      letterArray: modifiedArrays.letterArray,
      wordArray: modifiedArrays.wordArray,
      objectArray: modifiedArrays.objectArray
    }
  })
}

module.exports = {
  list
}