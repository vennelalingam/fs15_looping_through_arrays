// Looping through Arrays

// for loop

// let letters = [ "A", "B", "C"];

// for(let i = 0; i < letters.length; i++) {
//     console.log(letters[i]);
// }
// A
// B
// C

// for(let i = letters.length - 1; i >= 0; i--){
//     console.log(letters[i]);
// }
// C
// B
// A

//  FOR loop: 
//if the length of the array dosen't change while 
// looping we use FOR loop.

// WHILE loop:
// if the length of array changes while we r looping
// ie., adding or deleting elements from an array 
// we use for loop or while loop 

// let i = 0;
// while (i < letters.length) {
//     console.log(letters[i]);
//     i++;
// }
// A
// B
// C

// for..in:
// for...in  => use for only objects. 
// arrays are objects.. so also works for arrays
// for...in gives both keys and values
// for...of:
// for...of  => use for only arrays
// for...of gives values
// the for...of statement creates a loop iterating 
// over arrays and strings (but not objects!)

// for...of Loop

// let letters = ["A", "B", "C"];

// for(let value of letters){
//     console.log(value)
// }
// A
// B
// C

// looping through Nested Arrays

// let grid = [[1,2,3], [4,5,6], [7,8,9]];

// for (let i = 0; i < grid.length; i++){ // rows
//     console.log(grid[i])
//     //  [1, 2, 3]
//     //  [4, 5, 6]
//     //  [7, 8, 9]
//     for(let j = 0; j < grid[i].length; j++){ // columns
//         console.log(grid[i][j]);    
//         // 1
//         // 2
//         // 3
//         // 4
//         // 5 ... 
//         // 9
//     }
// }

// let grid = [
//     [
//         [1], [2], [3]
//     ],
//     [
//         [4], [5], [6]
//     ],
//     [
//         [7], [8], [9]
//     ]
// ];

// for(let i=0; i<grid.length; i++){ // rows
//     console.log(grid[i][0]);
    // [1]
    // [4]
    // [7]
    // console.log(grid[i][1]);
    // [2]
    // [5]
    // [8]
    // console.log(grid[i][2]);
    // [7]
    // [8]
    // [9]
    // for(j=0; j<grid[i].length; j++){ // columns
    //     console.log(grid[i][j][0]);
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    // }
// }

// let grid = [[[1], [2], [3], [4], [5], [6], [7], [8], [9]]]

// for(let i=0; i<grid.length; i++){
    // console.log(grid[i][0]); // [1]
    // console.log(grid[i][0][0]); // 1
    // for(let j=0; j<grid[i].length; j++){
    //     console.log(grid[i][j][0]);
    // // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9

    // for displaying few numbers access length - 1

    // for(let j=0; j<grid[i].length-3; j++){
    //     console.log(grid[i][j][0]);
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6

    // for(let k=0; k<grid[i][j].length; k++){
    //     console.log(grid[i][j][0]);
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    // }
//     }
// }