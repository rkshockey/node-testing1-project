function trimProperties(obj) {
  const newObj = {}
  for (const key in obj){
    newObj[key] = obj[key].trim()
  }
  return newObj
}

function trimPropertiesMutation(obj) {
  for (const key in obj){
    obj[key] = obj[key].trim()
  }
  return obj
}

function findLargestInteger(integers) {
  let largest
  for(let i = 0; i < integers.length; i++){
    largest = largest ?
      largest < integers[i].integer ?
        integers[i].integer :
        largest :
      integers[i].integer
  }
  return largest
}

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber
  }

  countDown() {
    const value = this.count
    if (this.count !== 0){
      this.count --
    }
    return value
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.season = 'spring'
  }

  next() {
    if (this.season === 'spring'){
      this.season = 'summer'
    }else if(this.season === 'summer'){
      this.season = 'fall'
    }else if(this.season === 'fall'){
      this.season = 'winter'
    }else{
      this.season = 'spring'
    }

    return this.season
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.model = name
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.mpg = mpg
    this.tankSize = tankSize
  }

  drive(distance) {
    const fuelNeeded = distance / this.mpg
    if (fuelNeeded > this.tank){
      this.odometer += (this.tank * this.mpg)
      this.tank = 0
    }else{
      this.odometer += distance
      this.tank -= fuelNeeded
    }
    return this.odometer
  }

  refuel(gallons) {
    if (this.tank + gallons > this.tankSize){
      this.tank = this.tankSize
    }else{
      this.tank += gallons
    }
    const miles = this.tank * this.mpg
    return miles
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  if (number % 2 === 0){
    return true
  }else{
    return false
  }
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
