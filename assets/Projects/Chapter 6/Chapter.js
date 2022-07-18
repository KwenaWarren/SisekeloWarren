var statusref; //Will hold pointer to status
var numbers = []; //array of pointers to the created span elements
var game = true; //Boolean flag used to control when player can make a move
var player = []; //Will hold all the numbers taken by the player
var computer = []; //Will hold all the numbers taken by the computer
var board = [1,2,3,4,5,6,7,8,9]; //Initial setting for the numbers held on the board
var wedge = 50; //horizontal space allowed for each number
var startx = 15; //pieces lined up vertically
var groups = [// Static array holding the valid combinations 
    " ", // placeholder; not used
    "3 4 8",
    "1 5 9",
    "2 6 7",
    "1 6 8",
    "3 5 7",
    "2 4 9",
    "2 5 8",
    "4 5 6"
]; // Close groups
var occupied = [//Static array, indexed by subtracting 1 from number N, indicating which groups the number belongs to 
    [2, 4],
    [3, 6, 7],
    [1, 5],
    [1, 6, 8],
    [2, 5, 7, 8],
    [3, 4, 8],
    [3, 5],
    [1, 4, 7],
    [2, 6]
]; //Close occupied
var pgroupcount = [0,0,0,0,0,0,0,0,0]; //unused first slot
var cgroupcount = [0,0,0,0,0,0,0,0,0]; //unused first slot

/* 
    FUNCTIONS 
*/
function init() {
    setUpBoard(); //Invoke setUpBoard
    statusref=document.getElementById("status"); //Get pointer to status area
}

//function: for computer turn
function smartChoice() {
    var boardl = board.length; //Store current length of board (number of numbers still on the board)

    //For loop through those numbers
    for (var i=0;i<boardl;i++) {
        //Set possible number for a move
        var possible = board[i];
        //For the groups that possible belongs to…
        for (var j=0; j < occupied[possible-1].length; j++) {
            //are there already two numbers in the computer's side?
            if (cgroupcount[occupied[possible-1][j]]==2) {
                return (i); //If so, return this number

            } //Close if
        }//Close inner for loop
            
    }//Close outer for loop

    //again, loop through numbers on board
    for (var i=0;i<boardl;i++) {
        var blocker = board[i]; //Set blocker
        
        //For those groups that blocker belongs to.
        for (var j=0; j < occupied[blocker-1].length; j++) {
            //..does the player already have two numbers?
            if (pgroupcount[occupied[blocker-1][j]]==2) {
                //If so, return index for this number
                return(i); 
            }//Close if
        }//Close inner for
    }//Close outer for

    /* 
    try for two in a row
    See if there is a possible in a group with one
    computer played
    and 0 player presence
    */

    //For loop through elements on the board
    for (var i=0;i<boardl;i++) {
        var possible = board[i]; //Set possible

        //For loop for all the groups that possible belongs to
        for (var j = 0; j < occupied[possible-1].length; j++) {
            var whatgroup = occupied[possible-1][j];//Get the group

            //If computer has one number already and the player does not have any
            if ((cgroupcount[whatgroup] == 1) && (pgroupcount[whatgroup] == 0 )){
                return (i);//return index for this number
            }//Close if
        }//Close inner for
            
     }//Close outer for

     /* 
        If 5 is available, return its position in board
     */

    //Loop through board
    for (var i = 0;i<boardl;i++) {
        //If 5 is present
        if (board[i]==5) {
            return (i); //return its index
        }//Close if
    }//Close for

    /* 
        If even number available, 2, 4, 6, or 8, return its
        position in board
        Use fact that these numbers are the even ones
    */

    //Loop through all the numbers on the board
    for (var i = 0;i<boardl;i++) {
        //Check if the number is even
        if (0==board[i]%2) {
            return (i); //return index to this number
        }//Close if
    }//Close for

    /* Set up for random move */
    var ch = Math.floor(Math.random(0,boardl));
    //return this number
    return (ch); 

}//close smartmove function

//function: header for computerMove
function computerMove() {
    //If board is exhausted
    if (board.length<1) {
        statusref.innerHTML="Cat wins!"; //Set message
        return
    }//Close if

    var which = smartChoice(); //Get the smartChoice
    var n = board[which]; //Get the number for that choice
    take(n); //Invoke take (which will remove the number from the board)
    numbers[n-1].style.top = "150px"; //position the number on the computer's side
    numbers[n-1].removeEventListener("click",addToPlayer); //remove event
    computer.push(n); //add to the computer array
    var holder = occupied[n-1]; //holder holds groups with n

    //Loop through all the groups that holder belongs to
    for (var i=0;i<holder.length;i++) {
        cgroupcount[holder[i]]++; //Increment the count in cgroupcount

       // If any group is now at 3
       if (cgroupcount[holder[i]]==3) {
        statusref.innerHTML ="Computerwins "+groups[holder[i]]; //Send out message
        game = false; //turn off play this may not be necessary
        return; //return
       }//close if
    }//close for

    //Check again for end of game, without a win
    if (board.length<1) {
        statusref.innerHTML="Cat wins!"; //Set message
    }//close if
    else{//else continue. turn game back on
        game = true; //turn game on for player
    }// close else

}//Close computerMove

//header for setUpBoard
function setUpBoard() {
    var dv; //Will hold each newly created span element
    var xpos; //Used in computation of horizontal position

    //For loop, creating and positioning all the numbers
    for (var i=1; i<10; i++) {
        dv = document.createElement("span");//Create the span 
        dv.addEventListener("click", addToPlayer, false); //Set up event handling for clicking on each number
        dv.innerHTML = i.toString(); //Set label
        xpos = startx + i*wedge; //determine horizontal position
        dv.style.left=xpos.toString()+"px"; //Set horizontal position
        dv.style.top ="240px"; //Set vertical position
        document.body.appendChild(dv); //add the newly created div to the body
        dv.n = i; //Set an attribute to hold the number
        numbers.push(dv); //add to the numbers array


    }//close for loop

}//close function


//header for take function
function take(n) {
    var nAt = board.indexOf(n); //Find this number in the array
    
    //Should always be true
    if (nAt>-1) {
        board.splice(nAt,1); //removes element from board array; movement is done in the calling program
     }//close if
 }//close take function


//header for addToPlayer, the event handler for clicking on a number
function addToPlayer(ev) {
    //If game is started
    if (game) {
        var nn = ev.target.n; //Get the number clicked on
        ev.target.removeEventListener("click",addToPlayer);//remove event
        player.push(nn); //add this to the player array
        numbers[nn-1].style.top = "350px"; //reposition the element
        take(nn); //remove from the board array

        var holder = occupied[nn-1]; //holder holds groups with this number

        //Going through all the groups
        for (i=0;i<holder.length;i++) {
            pgroupcount[holder[i]]++; //Increment pgroupcount since player now has one more in that group
        

            //If this count is now 3…
            if (pgroupcount[holder[i]]==3) {
                statusref.innerHTML="Player wins"+groups[holder[i]]; //the player wins
                game = false; //Set game flag to false
                return ; //return (leave loop)
            }//close if true clause
        }//close for loop

        game = false; //temporarily stop player moves
        setTimeout(computerMove,1000); //Invoke computermove after a pause

    }//close if(game) true clause

    else{
        statusref.innerHTML="Reload for newgame."; //put out message
    }//close else    
}//close function