const fetch_product = fetch("https://fakestoreapi.com/products");
fetch_product.then(response =>{
    const res_data = response.json();
    res_data.then(data => {
        console.log(data);
        const sel = document.getElementById("second");
        for(i = 0; i < data.length; i = i + 1){
           // console.log(data[i]);
            let cart = data[i];
            console.log(cart.title);
            let div = document.createElement("div");
            div.className = "product_container";
            sel.appendChild(div);
                
                let divimg = document.createElement("div");
                divimg.className = "img-box";
                div.appendChild(divimg);

                    let img = document.createElement("img");
                    img.src = cart.image;
                    divimg.appendChild(img);

                    let divov = document.createElement("div");
                    divov.className = "overlay";
                    divimg.appendChild(divov);
                    let disc = document.createElement("p");
                    disc.innerText = "Description -:" + cart.description;
                    divov.appendChild(disc);

                let div_content = document.createElement("div");
                div_content.className = "product_content";
                div.appendChild(div_content);

                    let prodName = document.createElement("div");
                    prodName.className = "productName";
                    div_content.appendChild(prodName);

                        let name = document.createElement("h3");
                        name.innerText = cart.title;
                        prodName.appendChild(name);
                    
                    let price_rating = document.createElement("div");
                    price_rating.className = "price_rating";
                    prodName.appendChild(price_rating);

                        let price = document.createElement("h5");
                        price.innerText = "$ " + cart.price;
                        price_rating.appendChild(price);

                        let rating = document.createElement("h5");
                        rating.innerHTML = cart.rating.rate + '&#x2B50;';
                        price_rating.appendChild(rating);

                    let addc = document.createElement("button");
                    addc.innerText = "Add to Cart";
                    div_content.appendChild(addc);
        }
        
    })
})

