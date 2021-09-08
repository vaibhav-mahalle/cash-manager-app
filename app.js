const billAmount  = document.querySelector("#bill-amount");
const cashGiven   = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message     = document.querySelector("#error-message");
const noOfNotes   = document.querySelectorAll(".no-of-notes");

const notes =[2000,500,100,20,10,5,1];



checkButton.addEventListener("click",function validateBillandCashAmount()
{
   message.style.display = "none";


  if(billAmount.value<=0 || cashGiven.value<=0 )
  {
    errorMessage("Sorry. Either bill or cash is less than or equal to zero");
  }
  else
  {
    if(cashGiven.value >= billAmount.value)
    {
        const amountToBeReturned = cashGiven.value - billAmount.value ;
        calculateChange(amountToBeReturned);
    }
    else{
          errorMessage("Sorry you need to pay atleast equal to bill.");
    }
  }
 
});

function errorMessage(_something)
{
   message.style.display = "block";
  message.innerText = _something;
}

function calculateChange(amount)
{
 let i=0;
 while (i<notes.length) {
   const numberOfNotes = Math.trunc(amount/notes[i]);
   amount %= notes[i];
   noOfNotes[i].innerText = numberOfNotes;
   i++;
 }
}

