document.getElementById("placeOrder").onclick = placeOrder;


function placeOrder(){
    let numOfPizza_id = document.getElementById("numOfPizza").value;
    let kindOfPizza_id = document.getElementById("kindOfPizza").value;
    let deliveryLocation_id = document.getElementById("deliveryLocation").value;
    let birthday_id = document.getElementById("birthday").value;

     //calculate Order Price:
     let order_price_ = calcOrderPrice(numOfPizza_id, kindOfPizza_id);

    //calculate: delivery price
    let delivery_price_ = calcDelivery(order_price_, deliveryLocation_id, birthday_id);
   
    //output display two functions: order price & delivery price
    disOrder(order_price_, delivery_price_);
}

function calcOrderPrice(numOf_pizza, kindOf_pizza){
    getUserInputs();
    let _orderPrice = Number(numOf_pizza) * 120;
    let _price4extras = 0;

    if (kindOf_pizza === "Something Meaty"){
        _price4extras = Number(numOf_pizza) * 20;
    }

    _orderPrice += _price4extras;
    return _orderPrice;
}

function calcDelivery(order_price, delivery_location, birthday_){
    let delivery_price = 0;

    if(((delivery_location === "Rivonia") && (order_price > 250)) || (birthday_ === "yes")){
        delivery_price = 0;
    }else{
        delivery_price = 35;
    }

    return delivery_price;
}

function disOrder(order_price, delivery_price){
    let dis_ouput = "<p>Thanks for your Order</p>";

    if (delivery_price === 0){
        dis_ouput += "<p>You get free delivery</p>";
    }else{
        dis_ouput += "<p>Your delivery price: R" + delivery_price;
    }

    dis_ouput += "<p>Your total price: R" + (order_price + delivery_price) + "</p>";
    document.getElementById("displayResults").innerHTML = dis_ouput;
}