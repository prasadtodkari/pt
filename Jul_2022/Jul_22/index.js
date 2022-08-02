
const fetch_prom = fetch("https://reqres.in/api/users");
fetch_prom.then(response =>{
    const res_data = response.json();
    res_data.then(data => {
        display_data(data);
        console.log(data);
    })
})

const display_data = res => {
    //console.log(res.data);   
    let details = res.data;
    let ul = document.getElementById("user");
    for(i = 0; i < details.length; i = i + 1){
    let detail = details[i];
    let li = document.createElement("li");
        li.innerText = `Name - (${detail.first_name} ${detail.last_name})`;
    let p = document.createElement("p");
    p.innerText = `eMail - ${detail.email}`;
    
    let image = document.createElement("img");
        image.src = detail.avatar;
    ul.appendChild(image);
    ul.appendChild(li);
    ul.appendChild(p);
    }
}


