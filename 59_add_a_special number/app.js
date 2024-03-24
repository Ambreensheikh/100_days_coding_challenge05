// making a function that adds a specific number
function customAdder(vlaueToAdd) {
    return function (number) {
        return number + vlaueToAdd;
    };
}
//making magicbox that add 10 to each of given numbers
var addTen = customAdder(10);
console.log(addTen(10));
