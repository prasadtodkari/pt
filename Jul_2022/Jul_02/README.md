# Task of Jul 02

## Create 4 buttons and 4 functions (1 for each). 
* Task 1 - Take an input from the user as a string and check whether it is a palindrome string or not.**
-> (A palindrome string is a string which is same when read from left to right and right to left, example eye, radar, mom, kayak, etc etc...)
    
# Tried with Built in Function
    function palindrome() {
    let input = prompt(); //Take Input from User.
        console.log("User Input - " + input);

    let inputArray = input.split(''); //I have Converted String to an array.
        console.log("User Input Array - " + inputArray);

    let reverseArray = inputArray.reverse(); //I have converted array in reverse direction.
        console.log("converted Array - " + reverseArray);

    let reverseinput = reverseArray.join(''); //And Reverse direction array converted to a string.
        console.log("Input reversed - " + reverseinput);
    
    //Now Going to compare Inpot vs Reverse value of input.
    if(input == reverseinput) {
        alert('Your Input is palindrome');
     } else {
        alert('Your Input is not a palindrome');
    }
}

* Task 2 - Take input from the user as a string and print the character that is most occured. 
-> (For example, from the Input ABCDAAA, the output will be A)/

* Task 3 - Take input fromm the user, convert it to a number and print the factorial of that number 
-> (For example, factorial of 5 = 5 * 4 * 3 * 2 * 1 = 120, print 120).

* Task 4 - Take input from the user as a string and print the number of characters of that string 
-> (excluding the vowels, For, example -> "Aayush" , output 3, "Unnati" -> 3).