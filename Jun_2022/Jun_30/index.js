// let aname = ["aman", "unnati", "navjeet", "tejaswi", "apurva", "amod"];
// let max = 0;

// for(let i = 0; i < aname.length; i = i + 1){
//     let sname = aname[i];

// if (sname.length > max.length ){
//     max = sname;
//     }
// }

// console.log(max);

// function sum(){
//     let num1 = 5;
//     let num5 = 6;
//     let i = num1 + num5;
//     return i;
// }

// console.log(sum());

// function button(){
//     console.log("Hi, How are you?");
// }

function odd(){
    
    for (let i = 9; i > 0; i = i - 1){
            if(i%2 != 0){
                console.log(i);
            }
        }
    }
    
// function avg(num1, num2, num3, num4){
//     let average = (num1 + num2 + num3 + num4) /4;
//     return average;
// }


// console.log(avg(12,54, 16, 21));


function prime(numb){
    let count = 2;
    let isPrime = true;

    while(count <= numb - 1) {
    if(numb % count == 0) {
        isPrime = false;
    }
    count = count + 1;
    }

    if(isPrime == true) {
    return numb;
    } else {
    console.log("No, It is not a prime number");
    }
}

prime(9);

function check_prime(){
    for (let i = 1; i < 100; i = i + 1){
        console.log(i);
       prime(i);
    }
}

//check_prime();