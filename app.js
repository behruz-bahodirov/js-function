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

function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() { 
  this.value = 0;
};  
Test.assertEquals(counter.getValue(), 0, 'Initial counter value must be 0');
counter.increase();
Test.assertEquals(counter.getValue(), 1, 'Counter value must be increased');
counter.reset();
Test.assertEquals(counter.getValue(), 0, 'Counter value must be 0 after reset');
