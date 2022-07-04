let user_data = {
    'name'      : 'abcd',
    'age'       : 35,
    'is_active' : true
};

console.info(user_data['name']);

let calc = {
    'name' : 'pt calc',
    'sum'  : function(a, b){
        let s = a + b;
        return s;
    },
    'mul' : function(a, b){
        let m = a * b;
        return m;
    },
    'div'  : function(a, b){
        let d = a / b;
        return d;
    }
};

let result = calc.sum(14, 54);
let multiplication = calc.mul(10, 40);
let division = calc.div(80, 20);
console.log(result, multiplication);

console.log(document);

function dom(){
    let p = document.getElementById("dom");
    p.innerText = "First task of DOM manipulation";
}

function add(){
    //get value of input 
    let val = document.getElementById("qty").value;
    //increase input value by 1
    val = parseInt(val) + 1 ;
    //return value to html input
    document.getElementById("qty").value = val;
}

function min(){
    //get value of input 
    let val = document.getElementById("qty").value;
    //decrease input value by 1
    val = parseInt(val) - 1 ;
    //return value to html input
    document.getElementById("qty").value = val;
}
