function splitBill(){
    let amount = document.getElementById("amount").value;
    let friends = document.getElementById("friends").value;
    let result = amount / friends;
    document.getElementById("result").innerText="Result: Rs. "+result +" Per Person" ;
}