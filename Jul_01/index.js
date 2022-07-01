
// function even_odd(number){
//     if(number%2 == 0){
//         return true;
//     }   else {
//         return false;
//     }
// }
// let result = even_odd(9);
// if(result == true){
//     console.log("Even Number");
// }else{
//     console.log("Odd Number");
// }
// let sum = 0;
// for(i = 0; i < 10; i + 1){
//     let even_num = even_odd(i);
//     if (even_num == true){
//         sum = sum + i;
//     }
// }
// console.log(sum);
//function clickme(){
//let total = 15 + 79;
//alert(total);
//  let input = prompt();
//alert(input);
//     let count = 0;
//     for (var i = 0; i < input.length; i++) {
//     let single_character = input[i];
//     switch(single_character) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//       case 'A':
//       case 'E':
//       case 'I':
//       case 'O':
//       case 'U':
//         count = count + 1;
//         break;
//     }
//     }
//     alert(count);
// }
// function num_sum() {
//     let num1 = prompt();
//     let num2 = prompt();

//     let sum = parseInt(num1) + parseInt(num2);

//     alert(sum);
// }

function FizBuz() {
    let num1 = prompt();
    num1 = parseInt(num1);
    if (num1%5 == 0 && num1%3 == 0){
        alert("Fizz Buzz");
    }else if(num1%3 == 0){
        alert("Fizz");
    }else if(num1%5 == 0){
        alert("Buzz");
    }else {
        alert("this is just a Number")
    }

}
