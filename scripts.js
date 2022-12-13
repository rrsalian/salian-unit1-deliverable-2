/* 
    12/12/2022 - Deliverable 2  by Rajesh Salian

    Accept PlayerName
    Accept Response from Player either 3 or 6 holes
    Prompt for number of putts for an iteration of Player response from earlier step 
    Store each putt information from the iteration above.
    Once iteration is completed get the total putts from the player of that many holes.
    Display Result by following the calc : total putts - (Number of holes * 3) 

*/

let playerName = prompt("Welcome to GC mini golf! What is your name?").trim();

if (!playerName) {
    console.warn("Not able to proceed without a name. Please re-try later");    
}
else {

    let numberOfHoles = parseInt(prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes?`));
    // console.log(numberOfHoles);

    if ((numberOfHoles !== 3) && (numberOfHoles !== 6)) {
        console.warn("Player should have either 3 or 6 holes only. Please re-try later");    
    }
    else {
        let j;
        let playerResponse = 0;
                
        for (i=1; i <= numberOfHoles ; i++) {
            j = i - 1;
            playerResponse = playerResponse + parseInt(prompt(`How many putts for hole ${i} (par: 3)`));            
        }
        
        // console.log("Total par : " + numberOfHoles * 3);
        // console.log("player response : " + playerResponse);
        
        let coursePar = numberOfHoles * 3;
        let diff = playerResponse - coursePar;

        if (playerResponse === coursePar) {
            console.log(`Good game, ${playerName}! Your total par was: ${diff}`);
        }
        else if(playerResponse < coursePar) {
            console.log(`Great job, ${playerName}! Your total par was: ${diff}`);
        }
        else {
            console.log(`Nice try, ${playerName}! Your total par was: +${diff}`);
        }    
    }
}    

