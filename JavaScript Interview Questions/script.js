// Sum the array items
// let arr = [1,2,5,7];
// let sum = arr.reduce( (a,b) => a+b);
// console.log(sum);

//you can call a function 2 ways
// add(1,2);
// add(1)(2);
//write a function that can do it both ways

// function add(a,b){
//     return a && b ? a + b : function (c) {return a + c;}
// }
// //console.log(add(3)(4)); //7
// console.log(add(3,4)); //7

//unsorted array [1-100], one number is missing, find that number
// let arr = [4,1,2]; //using shorther arr for simplicity
// let ary=arr.sort( (a,b) => a-b );
// //ary: 1 2 4 -- length is 3
// //i:   0 1 2
// for (let i = 0; i <ary.length; i++){
//     if (ary[i] !== i+1) { 
//         console.log('missing: ' + (i+1) );}
// }

//solution w math
// let arr = [4,1,2,3,6];
// let len = arr.length + 1;
// let total = (len*(len+1))/2;
// let arrTotal = arr.reduce((t,i) => t+i);
// console.log(total-arrTotal);


//what is the difference between these type of functions 
//and when would you use each

// function x(){
// }

// let y = function(){
// }

// -- read up on function and variable hoisting
//variables and constants declared w const and let are not hoisted!!!
//js only hoists declarations, not initizalizations
//the first type would be function declaration, the second type would be
//function expression
//function declaration can be used before they are declared
// function expressions are not hoisted and we cannot use them before defining them
//if you pass x into y it also becomes expression inside


//when someone pays you have to return, for example, 20.47
//design the function that gives back the exact change w min amout of coins

// const til ={
//     penny : 12,
//     nickel: 10,
//     dime: 2,
//     quarter: 12,
//     dollar: 30
// };

//im creating a new object (not given)
// const value ={
//     penny : 1,
//     nickel: 5,
//     dime: 10,
//     quarter: 25,
//     dollar: 100
// };

// //20.47
// function money(total){
//     let cT = total * 100 //everything in cents -> 2047
//     //2047 % value.dollar = 47
//     let remainer = ct % value.dollar;
//     dollar = Ct - remainer;
//     //then 47 divided by 25 and then continue
//     //you can also loop this through different coins because logic is the same
// }


// let str ='i love javascript';
// i want the return to say 'tpircsavaj evol i'

// let rev = str.split('').reverse().join('');
// console.log(rev);

// i want the return to say 'javascript love i'
// let rev = str.split(' ').reverse().join(' ');
// console.log(rev);

