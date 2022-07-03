// Task First Check palindrome text

function palindrome() {
    let input = prompt(); // Getting Input from User.
    console.log(input); // verifying the Input.
    
    let reverseInput = ""; // to store string in reverse direction.
    for (let i = input.length - 1; i >= 0; i = i - 1) {
        reverseInput = reverseInput + input[i];
    }
    console.log(reverseInput); // verifying the Input is reversed correctly.

    // Now I will compare the result vs input
    if(input == reverseInput) {
        console.log("Your Input is palindrome");
        alert('Your Input is palindrome');
     } else {
        console.log("Your Input is not a palindrome");
        alert('Your Input is not a palindrome');
    }
}


// Task Second Check Maximum used character
function maxchar(){
    let string = prompt('Task 2 - Check Max occured character:');
    console.log(string);
    let char = {}; // store array of char with count.
    let count = 0; // store count of char initial started with 0.
    let result = ''; // store maximum used character in this variable.
    for(let i of string){
        char[i] = char[i] + 1 || 1;  
    }
    console.log(char);  
    
    //now comparing count with other and return result
    for(let i in char){
        if(char[i] > count){
            count = char[i];
            console.log(count);
            result= i;
            console.log(result);
        }
    }
    alert(result);
}

// Task Third - Take input and provide factorial of that number
function factorial(){
    let num = prompt('For Task 3 please enter number');
    let input = parseInt(num);
    let result = input;
        if(isNaN(input)){
            alert("Characters are not allowed..!! (Numbers Only)");
        }else{
            for(let i = input - 1; i > 0; i = i - 1){
                result = result * i;
                console.log(result);
            }
            alert("Factorial of Your entered Number is =" + result);
        }
}

// Task Forth - Count Non Wovels of String.
function nonwovels(){
     let input = prompt("For task 4 - Please provide your name OR string.");
      console.log("Your entered text is - " + input); // verifying the input

        if(isNaN(input)){ // verifying the user input
            let count = 0;
            for (var i = 0; i < input.length; i++) {
            let single_character = input[i];
            switch(single_character) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                count = count + 1;
                break;
            }
            }
            console.log('Count of Wovels - ' + count); // check the count of wovels

            let nonwov = input.length - count; //total characters - wovels.
            console.log('Number of Non Wovel characters : ' + nonwov);
            alert("Number of Non Wovel characters are : " + nonwov);
        } else {
            alert("Numbers are not allowed. please Enter characters only");
        }
    }