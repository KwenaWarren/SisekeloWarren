//#TODO: string array holding a group of numbers: "3 5 7"
//the array holds 9 items
//the item: empty placeholder. so indexing can start at 1

//array for board: starts with 9 elements
//array for the player: empty --> have 9 elements
//array for the computer: also initially empty --> has 9 elements
/* 
There are five arrays that do change: 
    board, 
    computer, 
    player, 
    pgroupcount, and 
    cgroupcount
 */

var groups = [
    " ", //placeholder, not used
    "3 4 8",
    "1 5 9",
    "2 6 7",
    "1 6 8",
    "3 5 7",
    "2 4 9",
    "2 5 8",
    "4 5 6"
];

var occupied = [ //indexed subtracting 1
 [2, 4],
 [3, 6, 7],
 [1, 5],
 [1, 6, 8],
 [2, 5, 7, 8],
 [3, 4, 8],
 [3, 5],
 [1, 4, 7],
 [2, 6]
];

var player = [];
var computer = [];
var board = [1,2,3,4,5,6,7,8,9];

var pgroupcount = [0,0,0,0,0,0,0,0,0]; //unused first slot
var cgroupcount = [0,0,0,0,0,0,0,0,0]; //unused first slot

//The setUpBoard function creates the nine span elements that represent the nine numbers
//. An extra attribute is set for the elements, named n, to save the specific number.


//The computerMove function is invoked after a pause.

/* The smartChoice program uses the arrays to go through the following operations:
    1. Is there any number still on the board (in the board array) that
        would win the game for the computer?
    2. Assuming that an immediate win is not possible, is there any
        number on the board that would mean an immediate win by the
        player? If so, play that number to block the player.
    3. Assuming that an immediate block is not required, is there any
        group with one element already played by the computer, and
        neither of the other two played by the player? If so, take one of the
        two available numbers.
    4. Assuming none of the previous cases apply, and 5 is available, take it.
    5. Assuming none of the previous cases apply, take an even number.
    6. Make a random choice from among the numbers remaining.

*/