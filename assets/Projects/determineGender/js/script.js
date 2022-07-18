//button
const btn0 = document.getElementById('computeBtn').onclick = computeFunc;//call: compute function
const btn1 = document.getElementById('clearBtn').onclick = clearInputOutFunc;//call: clear details function

//global var
let idNum = document.getElementById('idNum').value; //id no: 9604175845080
let DOB = "";
let userGender = "";
let citizenStat = "";
let anyNum = 8;
// let useLuhnAlgorithm = false;
let displayDiv = document.getElementById('displayDiv');

function init(){
    idNum = document.getElementById('idNum').value; //id no: 9604175845080
}

//functions
function computeFunc(){
    //local var
    _year = idNum.substring(0,2);
    _month = idNum.substring(2,4);
    _day = idNum.substring(4,6);
    
    //assign global var: with values
    _userGender = (idno) => (idno.substring(6,10) >4999) ? "Male" : "Female";
    userGender = _userGender(idNum);//assign gender

    _citizenship = (idno) => (idno.substring(10,11) === 1) ? "permanent resident" : "South African Citizen";
    citizenStat = _citizenship(idNum);//assign user's citizenship status

    _anyNumber = (idno) => (idno.substring(11,12) === 8) ? 8 : `You're number is: ${idno.substring(11,12)}.`;
    anyNum = parseInt(_anyNumber(idNum)); //assign user's second last charater

    DOB = `19${_year}-${_month}-${_day}`;//sets: data of birth

    //display value
    displayDiv.innerHTML += `<p>ID Number: ${parseInt(idNum)}</p>`;
    displayDiv.innerHTML += `<p>Birthday: ${DOB}</p>`;
    displayDiv.innerHTML += `<p>Gender: ${userGender}</p>`;
    displayDiv.innerHTML += `<p>Citizenship status: ${citizenStat}</p>`;
    displayDiv.innerHTML += `<p>Any number usually [8]: ${anyNum}</p>`;
    // displayDiv.innerHTML += `<p>Uses Luhn Algorithm: ${useLuhnAlgorithm}</p>`;
}

function clearInputOutFunc(){
    //clear html fields
    const clearTxt = document.getElementById('idNum').value = "";
    const clearDiv = document.getElementById('displayDiv');
    clearDiv.innerHTML = "<h3>--OUTPUT--</h3>";
}

//set an interval to call init function