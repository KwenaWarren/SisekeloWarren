//onclic events
const btn = document.getElementById('validateidbtn').onclick = validateUserIdFunc;

//global variables
let dob = '';
// var userIdNo = document.getElementById('useridtxt').value;
let userGender = 'unknown';
// let userGender2 = (idno) => (idno.substring(6,10) >4999) ? "Male" : "Female";
let citizenShipStatus = '';
let anyNumber = 0;
let usesLuhnAlgorithm = false;

let displayUserInfo;
//id no: 9604175845080
let userIdNo = "";

//init: function
function init(){
    displayUserInfo = document.getElementById('displayOutputDiv');//display
    userIdNo = document.getElementById('useridtxt').value;
}

//function:
function validateUserIdFunc(){
    var getUserId = userIdNo;
    userIdNo = parseInt(getUserId);
    
    //local variables
    let year = userIdNo.substring(0,2);
    let month = userIdNo.substring(2,4);
    let day = userIdNo.substring(4,6);
    // let _gender = userIdNo.substring(6,10);
    let _userGender = (idno) => (idno.substring(6,10) >4999) ? "Male" : "Female";
    //assign user's gender
    userGender = _userGender(getUserId);
    
    let _citizenship = (idno) => (idno.substring(10,11) === 1) ? "permanent resident" : "South African Citizen";
    //assign user's citizenship status
    citizenShipStatus = _citizenship(getUserId);

    let _anyNumber = (idno) => (idno.substring(11,12) === 8) ? 8 : `You're number is: ${userIdNo.substring(11,12)}.`;
    //assign user's second last charater
    anyNumber = _anyNumber(getUserId); 

    dob = `19${year}-${month}-${day}`;//sets: data of birth

    //if statetemnt: gender
    /* if ((_gender >= 0) && (_gender <= 4999)){
        userGender = "Female";
    } else if ((_gender >= 5000) && (_gender <= 9999)){
        userGender = "Male";
    }else{
        displayUserInfo += '<p>We could find your gender from iD number</p>';
    } */

    //if statetemnt: citizenship
   /*  if (userIdNo.substring(10,11) === 1){
        citizenShipStatus = "permanent resident";
    }else if(userIdNo.substring(10,11) === 1){
        citizenShipStatus = "South African Citizen";
    } else{
        displayUserInfo += '<p>You are not from South Africa</p>';
    } */

    //if statetemnt: anynumber value, normally is [8]
    /* if (userIdNo.substring(11,12) === 8){
        anyNumber = 8;
    } else{
        return `You're number is: ${userIdNo.substring(11,12)}.`;
    } */

    //call display: method
    displayUserDataFunc(dob, userGender, citizenShipStatus, anyNumber);

}

function displayUserDataFunc(_dob, _gender,_citizenship,_anyNumber){
    let displayMessage = "<p>Displaying user details</p>";

    displayUserInfo.innerHTML += `\nID number: ${userIdNo}\n
    Birthday: ${_dob}\n
    Gender: ${_gender}\n
    Citizenship status: ${_citizenship}\n
    Any number usually [8]: ${_anyNumber}\n
    Uses Luhn Algorithm: Yes`;
}

/* 
// Code using if...else
let x;
if (someCondition) {
  x = 10;
} else {
  x = 20;
}

// Same result using the ternary operator
const x = someCondition ? 10 : 20;
//_____________________________
let userID = '9604175845080';
let userGender = (idno) => (idno.substring(6,10) >4999) ? "Male" : "Female";
*/