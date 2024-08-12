// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    var xSum = 0;
    for (i = 0; i<x.length; i++){
        xSum += Number(x[i]);
    }
    return xSum
}
sumMix([9, 3, '7', '3'])