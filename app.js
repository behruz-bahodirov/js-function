function checkAlive (health) {
  if (health <= 0) {
    return false
  } else  {
    return true
  }
}

console.log(checkAlive(0))
console.log(checkAlive(4))
console.log(checkAlive(-1))


function addFive(num) {
  var total = num + 5
  return total
}

console.log(checkAlive(0))
console.log(checkAlive(5))
console.log(checkAlive(-5))
