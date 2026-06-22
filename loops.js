//loops
// for loops

// for (var i = 1; i <10; i++){
//     console.log("jey")
// }
// console.log(i+"fail value")

//sum of n natural number

// let primeNum = true;
// let n = 20;
// for(let i = 2; i <= Math.floor(n/2);i++){
// if (n%i === 0) {
//     primeNum = false
//     break;
// }
// }
// console.log(primeNum)


// console.log("fact value")

// let ans= prompt("give me (exit for close)")

// while (ans !== 'exit') {
//     ans = prompt("give me (exit for close)")
// }


// let n = 1234;

// let rev = 0

// while (n > 0) {
//     let rem = n % 10;
//     rev = rev*10 + rem;
//     n = Math.floor(n/10)
// }

// console.log(rev)


let n = 145

let sum = 0;
let copy = n;

while (n> 0) {
    var rem = n%10
    var fact = 1;

    for (let i = 0; i < rem; i++) {
        fact = fact * i;
    }
    sum = sum + fact;
    n =Math.floor(n/10);
}