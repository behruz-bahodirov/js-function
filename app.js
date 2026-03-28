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

function sumMix(x) {
y = 0
z = 0
    let t = typeof(x)
    for(key of x) {
        if (t == String) {
            y += +key
        } else {
            z += +key 
        }
    }
    return y + z
}
console.log(sumMix([1,2,3,'3']))
console.log(sumMix(['1',7,31,'3']))
console.log(sumMix(['11',4,'3',3]))
