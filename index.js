// all getting element by his id;
const getElement = (id) => document.getElementById(id);

let display = getElement("display");

let depositBtn = getElement("depositBtn");
let withdrawBtn = getElement("withdrawBtn");

let total = 0;
// adding event listener
depositBtn.addEventListener("click", () => {
  let depositAmount = getElement("deposit").value;
  if (depositAmount) {
    total = total + parseInt(depositAmount);
    display.innerText = total.toFixed(2);
    // after removing input value
    getElement("deposit").value = "";
  } else {
    return alert("Your Deposit ballance is Empty");
  }
});

// withdraw amount
withdrawBtn.addEventListener("click", () => {
  let charge = getElement("charge");
  let withdraw = getElement("withdraw").value;
  if (withdraw) {
    let withdrawAmount = parseFloat(withdraw);
    let ourSystemCost = 1.8;
    let ourCharge = (ourSystemCost * withdrawAmount) / 100;
    let totalCost = withdrawAmount + ourCharge;

    if (total <= totalCost) {
      return alert("insufficient ballance");
    } else {
      total = total - totalCost;
      display.innerText = total.toFixed(2);
      charge.innerText = ourCharge.toFixed(2);
      getElement("withdraw").value = "";
    }
  } else {
    return alert("withdraw ballance is zero");
  }
});
