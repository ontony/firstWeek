

const num = 33721;

const arr = num.toString();
splitArr = arr.split('');

const result = splitArr.reduce(function(sum, current) {
  return parseInt(sum, 10) * parseInt(current, 10);
});
console.log(result)


var square = result;
var counter = 0;
while (counter < 3){
    square = square*square;
    counter++;

}

console.log(square);

var answer = square.toString();

var arrTwo = answer.split('');

var twoDigit = parseInt((arrTwo[0] + arrTwo[1]), 10);

console.log(twoDigit);
