// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(score){
    /*
    * initialize an empty array
    * loop through the array
    * console.log how many items are in the array (as a test)
    * delete console.log
    * if statement with two conditions
    * push the result to the new array
    */
    let finalScore = []
    for(let i=0; i<score.length; i++){
        if(score[i][0] >= 55 && score[i][1] > 7){
            finalScore.push("Senior")
        } else {
            finalScore.push("Open")
        }
    } return finalScore
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])