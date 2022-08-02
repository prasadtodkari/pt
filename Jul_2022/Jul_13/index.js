let info = {
    fname : "Prasad",
    lname : "Todkari",
    gender : "Male",
    mob : "9221717500"
}

let data = Object.keys(info);
console.log(data);

for(i = 0; i < data.length; i = i + 1){
    let val = Object.values(info);
    console.log(val[i]);
}