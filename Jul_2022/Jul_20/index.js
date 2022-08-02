
let price1 = document.getElementById('price1').innerText.replace('₹', '');
let min1 = document.getElementById('min1');
    min1.addEventListener('click', _ => {
        let qty = document.getElementById('qty1').value;
        if(qty == 0){
            $('#min1').prop('disabled', true);
        }else{
        let q = parseInt(qty) - 1 ;
        console.log(q);
        let tot1 = parseInt(price1) * q;
        console.log(tot1);
        document.getElementById('tot1').innerText = "₹ " + tot1;
        document.getElementById("qty1").value = q;
        }
    })

let add1 = document.getElementById('add1');
    add1.addEventListener('click', _ => {
        let qty = document.getElementById('qty1').value;
        let q = parseInt(qty) + 1 ;
        console.log(q);
        let tot1 = parseInt(price1) * q;
        console.log(tot1);
        document.getElementById('tot1').innerText = "₹ " + tot1;
        document.getElementById("qty1").value = q;
    })


let price2 = document.getElementById('price2').innerText.replace('₹', '');
let min2 = document.getElementById('min2');
    min2.addEventListener('click', _ => {
        let qty2 = document.getElementById('qty2').value;
        if(qty2 == 0){
            $('#min2').prop('disabled', true);
        }else{
        let q2 = parseInt(qty2) - 1 ;
        console.log(q2);
        let tot2 = parseInt(price2) * q2;
        console.log(tot2);
        document.getElementById('tot2').innerText = "₹ " + tot2;
        document.getElementById("qty2").value = q2;
        }
    })

let add2 = document.getElementById('add2');
    add2.addEventListener('click', _ => {
        let qty2 = document.getElementById('qty2').value;
        let q2 = parseInt(qty2) + 1 ;
        console.log(q2);
        let tot2 = parseInt(price2) * q2;
        console.log(tot2);
        document.getElementById('tot2').innerText = "₹ " + tot2;
        document.getElementById("qty2").value = q2;
    })


let price3 = document.getElementById('price3').innerText.replace('₹', '');
    let min3 = document.getElementById('min3');
        min3.addEventListener('click', _ => {
            let qty3 = document.getElementById('qty3').value;
            if(qty3 == 0){
                $('#min3').prop('disabled', true);
            }else{
            let q3 = parseInt(qty3) - 1 ;
            console.log(q3);
            let tot3 = parseInt(price3) * q3;
            console.log(tot3);
            document.getElementById('tot3').innerText = "₹ " + tot3;
            document.getElementById("qty3").value = q3;
            document.getElementById('alert').innerText = "";
            }
        })
    
    let add3 = document.getElementById('add3');
        add3.addEventListener('click', _ => {
            let qty3 = document.getElementById('qty3').value;
            if(qty3 >= 2){
                document.getElementById('alert').innerText = "Offer Product Max allowed Qty 2";
                $('#add3').prop('disabled', true);
            }
            let q3 = parseInt(qty3) + 1 ;
            console.log(q3);
            let tot3 = parseInt(price3) * q3;
            console.log(tot3);
            document.getElementById('tot3').innerText = "₹ " + tot3;
            document.getElementById("qty3").value = q3;
        })

document.addEventListener('click', (e) => {
    let tot1 = document.getElementById('tot1').innerText.replace('₹', '');
    let tot2 = document.getElementById('tot2').innerText.replace('₹', '');
    let tot3 = document.getElementById('tot3').innerText.replace('₹', '');
    sum =  parseInt(tot1) + parseInt(tot2) + parseInt(tot3);
    document.getElementById("sum").innerText = "₹ " + sum;
})
