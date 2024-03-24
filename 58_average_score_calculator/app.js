"use strict";
//to calculate average of all scores
//first add all numbers of scores
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    //devide all number score to score length
    return total / scores.length;
}
console.log(averageScore(20, 40, 80, 100));
