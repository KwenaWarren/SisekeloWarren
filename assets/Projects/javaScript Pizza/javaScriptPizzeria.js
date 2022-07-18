//Event listener for: button clicks
document.getElementById("placeOrder").onclick = computeUserOrder;

//function: to call other functions --> compute the user order
function computeUserOrder(){
    // get: user inputss
    getUserInput();

    // get the pizza price
    let orderPrice = prizzaCost(pizzaNum, kind_pizza);

    // get the delivery price
    let deliveryPrice = pizzaDeliveryPrice(orderPrice, location_less_5km);

    // get: the cost of the pizza
    let pizzaCost = prizzaCost(num_pizza, kind_pizza);

    // display output
    let output = displayOutput();

}

//function: to get user input from html page
function getUserInput(){
    //html form: get user input
    let pizzaNum = document.getElementById("pizzaNum").value;
    let kind_pizza = document.getElementById("kind_pizza").value;
    // let deliveryCity = document.getElementById("deliveryCity").value;
    let location_less_5km = document.getElementById("location_less_5km").value;

}



//function: to calculate the prizza price
function prizzaCost(num_pizza, kind_pizza){
    //local variables
    let orderPrice = Number(pizzaNum) * 10;
    let extras = 0;
    let extraPices = orderPrice * 0.10;

    //conditional statement: to calculate the prizza cost
    if (kind_pizza === "premium") {
        extras = Number(num_pizza) * extraPices;
    }

    //increment: the price on the order plus any extras the user selected.
    orderPrice += extraPices;
    return orderPrice;
}

// function: for pizza delivery price.
function pizzaDeliveryPrice(price_order, location_less_5km){
    //local variable for the pizza delivery price
    let price_delivery = 0;

    /* conditional statement: pizza delivery {
        1. checks location
        2. checks if the location of the client is < less than 5km
        3. checks if the order of the client is greater > certain number: 
            -to determine whether the delivery prize will be charged} */
    if ((location_less_5km === 'yes') && (price_order <= 150)){
        price_delivery = 20;  
    } else if((location_less_5km === 'yes') && (price_order > 150)){
        price_delivery = 0;
    } else if ((location_less_5km === 'no') && (price_order <= 150)){
        price_delivery = 70;
    }else if ((location_less_5km === 'no') && (price_order > 150)){
        price_delivery = 50;
    }

    //returns: delivery prize
    return (price_delivery *= 0.14);
}

//function: to display output
function displayOutput(){
    // function call: deliveryPrice, orderPrice
    computeUserOrder();

    // local variable: holds output
    let dis_output = "<p>Thank You For Your Business.</p>";

     // output the delivery price, if there is one
     if (deliveryPrice === 0) {
        dis_output += "<p>Free Delivery</p>";
    } else {
        dis_output += "<p>Delivery Cost: R" + deliveryPrice;
    }

    //add the total cost: to dis_output variable and display as a paragraph
    dis_output += "<p>Total Cost: R" + (orderPrice + deliveryPrice);

    // Display output: to html page
    document.getElementById("displayOutput").innerHTML = dis_output;

}