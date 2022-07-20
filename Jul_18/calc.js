let display = document.getElementById('screen');
let buttons = document.querySelectorAll('#btn');
let dispValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*'; //converted x to * for multiplication
            dispValue += buttonText;
            display.value = dispValue;
        }
        // When we click on C need to set display blank
        else if (buttonText == 'C') {
            dispValue = "";
            display.value = dispValue;
        }
        // system default function to calculate clicked button value
        else if (buttonText == '=') {
            display.value = eval(dispValue);
            dispValue = "";
        }
        // else display whatever is clicked by user on screen
        else {
            dispValue += buttonText;
            display.value = dispValue;
        }

    })
}


