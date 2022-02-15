let simpleObject = {
  color: 'red',
  number: 4,
  numberString: '16',
  word: 'perpetuity'
}

let objectOfArrays = {
  numberArray: [ -1, 0, 1, 2, 3, 5, 10, 100, 1000 ],
  letterArray: [ 'f', 'g', 'a', 'z', 'k', 'c', 'd', 'y', 'm' ],
  wordArray: [ 'house', 'perpetuity', 'scandal', 'we can do it joe', 'zebra', 'apportion' ]
}

let nestedObject = {
  house: {
    color: 'red',
    sizeInSquareFt: 2024,
    style: 'colonial',
    yard: true
  },
  apartment: {
    color: 'white',
    sizeInSquareFt: 800,
    style: null,
    yard: false
  },
  duplex: {
    color: 'teal',
    sizeInSquareFt: 1300,
    style: 'modern',
    yard: true
  }
}

module.exports = {
  simpleObject,
  objectOfArrays,
  nestedObject
}