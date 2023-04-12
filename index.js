const button = document.querySelector (`#btn`);
button.addEventListener (`click`, calculateAmount);

const buttonTip = document.querySelector (`#addTip`);
buttonTip.addEventListener (`click`, showTip)

function showTip(e) {

    e.preventDefault();
    
    tip.style.display = `block`;
}


function calculateAmount(e) {

e.preventDefault();

const bill = document.querySelector (`#bill`).value;
const ppl = document.querySelector (`#people`).value;
const tips = document.querySelector (`#tip`).value;

if (ppl===0 || bill===0 ||ppl<1){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Enter your information!',
        
      })
}

let amountPerPerson = bill/ppl;
let tipAmount = (bill*tips)/ppl;
let totalSum = amountPerPerson + tipAmount;

amountPerPerson  = amountPerPerson.toFixed(2); 
tipAmount = tipAmount.toFixed (2);
totalSum = totalSum.toFixed (2);

document.querySelector (`#dividedBill`).textContent = amountPerPerson;
document.querySelector (`#dividedTip`).textContent = tipAmount;
document.querySelector (`#tipAndTotal`).textContent = totalSum;

}