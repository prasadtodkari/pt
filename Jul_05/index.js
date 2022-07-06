function chec(){
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass2").value;
    if(pass == pass2){
        let p = document.getElementById("result");
    p.innerText = "Password Match";
    p.className = "green"; 
    
    }else{
        let p = document.getElementById("result");
    p.innerText = "Password dose not Match";
    p.className = "red"; 
    }
}

function add_li() {
    let l = document.createElement("li");
    l.innerText = document.getElementById("new_li").value;
  
    let c = document.getElementById("container");
    c.appendChild(l);
}
function reset() {
    let del = document.removeChild; 

    let c = document.getElementById("container");
    del.appendChild(del);
}
