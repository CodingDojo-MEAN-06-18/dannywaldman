module.exports = function (){
  return {
    add: function(num1, num2) { 
         console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
    },
    multiply: function(num1, num2) {
         console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
    },
    square: function(num) {
         console.log(`The square of ${num} is ${Math.pow(num,2)}`);
    },
    random: function(num1, num2) {
         console.log(`A random number between ${num1} and ${num2} is ${Math.floor(Math.random() * (num2 - num1 + 1)) + num1}`);
    }
  }
};

