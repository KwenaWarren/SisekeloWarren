const btn = document.getElementById('validateBtn');
btn.onclick = myGuess(CGN);

 // random value generated
 let randomNumberCPU;
      
 // counting the number of guesses
 let guess = 3;

//  let display= document.getElementById("displayMsg");
let display;
let CGN;

// setInterval(init(), 10000);
/* setInterval(revealInterface(), 10000);
    
function revealInterface(){
    const hideTextbox = document.getElementById('txtCGN').hidden = true;
} */

function init(){
    randomNumberCPU = Math.floor(Math.random() * 10 + 1);
    display = document.getElementById("displayMsg");
    display.innerHTML += `<p>CPU Random Number is: ${randomNumberCPU}</p>`;
    // alert(`CPU no: ${randomNumberCPU}`);
    
    CGN = document.getElementById("txtCGN").value;
    //var answer = prompt("Please guess a number between 1 and 10.");

    //convert: string to number
    CGN = Number(CGN);
    display.innerHTML += "<p>Your guessed number is: "+ CGN + "</p>";

}//end of function: initialize

function clientGuess(CGN){
    if (guess > 0){
        let innerDisplay = '';
        //if statement:
        if(CGN === randomNumberCPU){    
            // display.innerHTML +=  "<p>CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS </p>";
            // alert(`CONGRATULATIONS!!! YOU GUESSED IT RIGHT WITH ${guess} GUESSESS REMAINING`);
            guess = 0;
            innerDisplay = `CONGRATULATIONS!!! YOU GUESSED IT RIGHT WITH ${guess} GUESSESS REMAINING`;

        }else if (CGN != randomNumberCPU){
            guess--;
            // display +=`<p>Unlucky! Try Again...\nYou have ${guess} guesses remaining.</p>`;
            // display.innerHTML += '<p>Unlucky! Try Again...</p>'+`<p>You have ${guess} guesses remaining.</p>`;
            innerDisplay = '<p>Unlucky! Try Again...</p>'+`<p>You have ${guess} guesses remaining.</p>`;
            document.getElementById('txtCGN').value = '';
            init();
        }else if (CGN <0){
            guess--;
            // display.innerHTML += "<p>The Number Should Between 1 & 10 and Not less than 0!</p>";
            innerDisplay = "<p>The Number Should Between 1 & 10 and Not less than 0!</p>";

        }else if(CGN > 10){
            guess --;
            // display.innerHTML += "<p>The Number Should Between 1 & 10 and Not greater than 10!</p>";
            innerDisplay = "<p>The Number Should Between 1 & 10 and Not greater than 10!</p>";

        }else{
            alert("Error!");
        }
        display.innerHTML += innerDisplay;

    }//end of while loop: decrements the number of guesses remaining

}//end of function: clientGuess