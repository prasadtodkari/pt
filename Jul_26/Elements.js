class Button {
    static clicked(){
        alert("Thank you we have recieved your Request..!!");
    };
    static render(text = "Click Here", onclick = "", clas = ""){
        // if(text == undefined){
        //     text = "click me";
        // }
        return `<button onclick="${onclick}" class="${clas}">${text}</button>`
    }
}

class Para{
    static render(text=""){
        return `<p>${text}</p>`
    }
}


class H1{
    static render(text="", clas=""){
        return `<h1 class="${clas}">${text}</h1>`
    }
}

class H5{
    static render(text="", clas=""){
        return `<h5 class="${clas}">${text}</h5>`
    }
}

class AboutMe{
    static clicked(){
        alert("Thank you we have recieved your Request..!!");
    };
    static render(){
        return`
            <h2>About Me</h2>
            <p>Hi...!!! I am Prasad Todkari</p>
            <button onclick="AboutMe.clicked()">About Me</button>
            ${Button.render("know more", "AboutMe.clicked()")}
        `;
    }
}

class Image{
    static render(source="", clas="", alt="" ){
        return `<img src="${source}" class="${clas}" alt="${alt}"></img>`
    }
}