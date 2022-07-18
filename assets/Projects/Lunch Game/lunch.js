// declare globals
var allowanceBudget = 100;
var lunches = 0;

//display lunch budget
document.getElementById("allowanceBudget").innerHTML = allowanceBudget;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
  resetForm();
  var day = 0;
  while (allowanceBudget > 0) {
    day++;
    var priceToday = getSandwichPrice();
    var numberOfSandwiches = document.getElementById("numSandwiches").value;
    var totalPrice = priceToday * numberOfSandwiches;

    if (allowanceBudget >= totalPrice) {
      allowanceBudget = allowanceBudget - totalPrice;
      lunches++;
      document.getElementById("receipt").innerHTML +=
        "<p><em><b>Day. " +
        day +
        "</b></em></p><p>Meal Cost: R" +
        priceToday +
        "</p><p>Balance: " +
        allowanceBudget.toFixed(2) +
        " </p><hr/> ";
    } else {
      document.getElementById("receipt").innerHTML +=
        "<p>Current Meal Cost: R" +
        priceToday +
        ". </p><p>Your weekly funds have depleted. Please recharge your account.</p>";
      allowanceBudget = 0;
    }
  }
  document.getElementById("receipt").innerHTML +=
    "<p>Weekly Meals bought: " + lunches + "</p>";
}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
  var sandwichPrice = (Math.random() * (20 - 10) + 10).toFixed(2);
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  allowanceBudget = 100;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}
