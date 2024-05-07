function investment(){
    let amount = moneyForm.amount.value;
    let interest = moneyForm.interest.value;
    let duration = moneyForm.duration.value;
    if(amount <= 0 || interest <=0 || duration <= 0 ){
        alert("amount cannot be zero");
        return false;
    }
    for (let i = 1; i <= duration; i++) { 
        amount *= (1 + interest / 12); 
    } 

        //let finalamount = amount * interest;
        let ul = document.getElementById("invest");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amount));
        ul.appendChild(li);
        return false;
}