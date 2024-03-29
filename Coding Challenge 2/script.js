/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var johnAvg = (89+ 120 + 103)/3;

var mikeAvg = (99+ 123 + 133)/3;

var maryAvg =(100+ 164+ 105)/3;

// if(johnAvg > mikeAvg){
//     console.log("John average is Higher than Mike with value = " + johnAvg);
// } else if(mikeAvg > johnAvg){
//     console.log("Mike average is Higher than John average with value =" + mikeAvg);
// } else {
//     console.log("Mike average is equal to John average, it is a Draw");
// }

if(johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log("John average is Higher than Mike & Mary with value = " + johnAvg);
} else if(mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log("Mike average is Higher than John & Mary average with value =" + mikeAvg);
} else if(maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log("Mary average is Higher than John & Mike average with value =" + mikeAvg);   
} else {
    console.log("Mike average is equal to John average & Mary, it is a Draw");
} 