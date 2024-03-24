// making a function that adds a specific number
function customAdder(vlaueToAdd : number) : (number:any) => number {
return function(number : number):number {
return number + vlaueToAdd;
} ;

} 
 //making magicbox that add 10 to each of given numbers
 let addTen = customAdder(10);
  console.log(addTen(10));