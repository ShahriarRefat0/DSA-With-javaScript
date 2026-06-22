let prompt = require("prompt-sync")();

let n = Number(prompt("enter the number "));

// base pattern
// for(let i = 1; i <= n; i++){
//    for(let j= 1; j <=n; j++){
//        process.stdout.write("* ")
//    }
//    console.log()
// }

// for(let i = 1; i <= n; i++){
//    for(let j= 1; j <=i; j++){
//        process.stdout.write("* ")
//    }
//    console.log()
// }


// for(let i = 1; i <= n; i++){
//    for(let j= 1; j <=i; j++){
//        process.stdout.write(j+" ")
//    }
//    console.log()
// }

// for(let i = 1; i <= n; i++){
//     let ascii = 65;
    
//    for(let j= 1; j <=i; j++){
//        process.stdout.write(String.fromCharCode(ascii)+" ")
//        ascii++
//    }
//    console.log()
// }

// for(let i = n; i >= 1; i--){

//    for(let j= 1; j <=i; j++){
//        process.stdout.write(j+" ")
//    }
//    console.log()
// }   

// for(let i = 1; i <= n; i++){

//    for(let j= 1; j <=n - i; j++){
//        process.stdout.write(j+" ")
//    }
//    console.log()
// }  


// for(let i = 1; i <= n; i++){
//     //inverter
//     for(let j= 1; j <=n-i; j++){
//        process.stdout.write("  ")
//    }
//    //right
//     for(let j= 1; j <=i; j++){
//        process.stdout.write("* ")
//    }
//    console.log()
// }



// for(let i = 1; i <= n; i++){
//     //inverter
//     for(let j= 1; j <=n; j++){
        
//         if (i == j || i + j == n + 1) {
//             process.stdout.write("* ")
//         }
//         else process.stdout.write("  ")
//    }
//    console.log()
// }


// for(let i = 1; i <= n; i++){
//     //inverter
//     for(let j= 1; j <=n; j++){
        
//         if (i == j || i + j == n + 1) {
//             process.stdout.write("* ")
//         }
//         else process.stdout.write("  ")
//    }
//    console.log()
// }

for(let i = 1; i <= n; i++){
   for(let j= 1; j <=n*2 - 1; j++){
    if (i == j || i + j==n*2) {
        process.stdout.write("* ")
    }
     else process.stdout.write("  ")
   }

   console.log()
}
