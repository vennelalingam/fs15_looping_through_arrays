// Code Challenges

/*-------------------------
1)
The loop is currently printing the index of 
the person array. Switch it so it is printing
the values instead.
----------------------*/
// const person = ["Sofia", 30, "Barcelona", true];

// using for...of loop 

// for (let value of person) {
//     console.log(value);
// }

// using for loop

// for(let i=0; i<person.length; i++){
//     console.log(person[i])
// }

/*-------------------------------
2)
Write a loop that prints all the values in pet.
--------------------------------*/

// const pet = ["spot", 2, "dog", "spotted"];

// using for...of loop 

// for(let value of pet){
//     console.log(value);
// }

// using for loop

// for(let i=0; i<pet.length; i++){
//     console.log(pet[i])
// }

/*----------------------------
3)
Create an array called "features" and add atleast
four items to it.

Then, print all the features in ONE statement instead
of one at a time. Using a loop, add each value to the
"carFeatures" string.

Bonus: add a comma between each feature so it more
closely resembels a real sentence when it prints.
--------------------------------*/

// let features = [];
// let carFeatures = "Car Features: "

// // adding features to an empty array

// features.push("automatic", 2015, "HondaCity", "silver");
// // console.log(features);
// // ['automatic', 2015, 'HondaCity', 'silver']
 
// for (let i = 0; i<features.length; i++){
//     carFeatures += `${features[i]}`;
//     if (i === features.length-1) {
//         carFeatures += ".";
//     } else {
//         carFeatures += ", ";
//     }    

//     //    solution - 2 --built-in join method
//     // console.log(`${carFeatures} ${features.join(", ")}.`);
//     // console.log(features[i]);

//     // solution 3
//     // if(i === features.length-1) {
//     //     carFeatures += `${features[i]}.`; 
//     //     // last feature add with "."
//     // } else {
//     //     carFeatures += `${features[i]}, `; 
//     //     // else anywhere in the string add with
//     //     //comma and space ", "
//     // }    

// }
// console.log(carFeatures);

/*--------------------------
4)
Write a loop that prints all the items in the nums 
array backwards (ie: start with 10 and end with 0).
----------------------------*/
// const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(i=nums.length - 1; i >= 0; i--) {
//     console.log(nums[i]);
// }

/*---------------------------
5)Create a nested loop that prints the numbers in 
the gridNum array in order.
-------------------------*/

// let gridNum = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [10]];

// for( let i=0; i<gridNum.length; i++){
//     // console.log(gridNum[i]);
//     for (let j=0; j<gridNum[i].length; j++){
//         console.log(gridNum[i][j])
//     }
// }
/*---------------------------
6)
Write a loop that prints the friends names.
--------------------------*/

// const friends = [
//   {
//     name: "Pedro",
//     relationship: "school",
//     age: 30,
//     types: ["friendly", "studious"]
//   },
//    {
//     name: "Sofia",
//     relationship: "work",
//     age: 38,
//     types: ["funny", "helping"]
//   },
//    {
//     name: "Mia",
//     relationship: "school",
//     age: 40,
//     types: ["inspiring", "simple"]
//   },
//    {
//     name: "Lucy",
//     relationship: "work",
//     age: 27,
//     types: ["crazy", "hardWorking"]
//   }
// ]


// for (let i=0; i<friends.length; i++){
//     // console.log(friends[i]);
//     for(let key in friends[i]){
//         // console.log(friends[i][key])
//         if (key === "name"){
//             console.log(friends[i][key])
//         } else null;
//     }
// }

//*********** alternate solution  *******/

// for (let i=0; i<friends.length; i++) {
//     console.log(friends[i]["name"])
//     // console.log(friends[i].name)
// }

/*---------------------------------
7)
Now, create a nested loop that prints all the 
"types" from the friends array.
-----------------------------------*/

// for (let i=0; i<friends.length; i++){
//     // console.log(friends[i]["types"]);
//     for(let j=0; j<friends[i]["types"].length; j++){
//         console.log(friends[i]["types"][j]);
//     }
// }

//***********alternate method *********/

// for (let i=0; i<friends.length; i++){
//     // console.log(friends[i]["types"]);
//     for (let value of friends[i]["types"]){
//         console.log(value);
//     }
// }

//********* for...of with 2 nested loops  ********/

// for(let value of friends){
//     // console.log(value["types"]);
//     for(let values of value["types"]){
//         console.log(values)
//     }
// }

/*----------------------
8)
Create a loop that prints the letters in alphabetical
order (you will have to use three nested loops to do
this).
try to do this without looking at the slides.
-----------------------*/
// let letters = [
//     [["A"], ["B"], ["C"]],
//     [["D"], ["E"], ["F"]],
//     [["G"], ["H"], ["I"]],
// ];

//********** for...of loop **********/

// for (let value of letters){
//     // console.log(value);
//     for (let values of value){
//         // console.log(values);
//         for(let result of values){
//             console.log(result);
//         }
//     }    
// }

//************* for loop ************/
// for (let i=0; i<letters.length; i++){
//     // console.log(letters[i]);
//     for (let j=0; j<letters[i].length; j++){
//         // console.log(letters[i][j]);
//         for (let k=0; k<letters[i][j].length; k++){
//             console.log(letters[i][j][k]);
//         }
//     }
// }

//*********** with 2 nested loops *******/
// for (let i=0; i<letters.length; i++){
//     // console.log(letters[i]);
//     for (let j=0; j<letters[i].length; j++){
//         console.log(letters[i][j][0])
//     }
// }

/*----------------------
9)
Create a nested loop to add each address into the
"allAddress" array. However, instead of adding them in
as objects, loop through the objects to concatenate
the values into strings.

Your result should look like this:
["Carrer de CodeOp 42 Barcelona Spain", "Carrer de Tech
200 Madrid Spain", "Carrer de JSON 22 Seville Spain"]

Hint: try creating a variable between the loops to store
each address string before pushing it into the 
allAddress array.
------------------------------*/

// const addressList = [
// {
//   line1: "Carrer de CodeOp",
//   line2: 42,
//   city: "Barcelona",
//   country: "Spain",
// },
// {
//   line1: "Carrer de Tech",
//   line2: 200,
//   city: "Madrid",
//   country: "Spain",  
// },
// {
//   line1: "Carrer de JSON",
//   line2: 22,
//   city: "Seville",
//   country: "Spain",
// }
// ]
// let allAddress = [];

/********** Solution with built-in Object method *********/

// for(let i=0; i<addressList.length; i++){    
//     let row = addressList[i];    
//     let result = Object.values(row)
//     //    console.log(result)    
//     allAddress.push(result.join(" "));
// }
// console.log(allAddress)


//******** Class Solution with nested looping ********** */

// for (const value of addressList){
//     // console.log(value);
//     let tempAddress = [];
//     for(let key in value){
//         let allValues = value[key];
//         // console.log(allValues)
//         tempAddress.push(allValues);
//     }
//     console.log(tempAddress);
//     allAddress.push(tempAddress.join(" "));
// }
// console.log(allAddress)

//********* solution 1 without nested looping  *******/

// for(let i=0; i<addressList.length; i++) {
//     let row = addressList[i]
// const address = `${row.line1} ${row.line2} ${row.city} ${row.country}`;
// let result = allAddress.push(address);
// console.log(result)
// }
// console.log(allAddress)


//*************  sol 2 without nested looping  **********/

// for(let i=0; i<addressList.length; i++){
//     let row = addressList[i];
//     let line1 = (row["line1"]);
//     // console.log(line1)
//     let line2 = row["line2"]
//     // console.log(line2)
//     let city = row["city"]
//     // console.log(city)
//     let country = row["country"]
//     // console.log(country)
//     let address = (line1 +" " + line2 + " " + city + " " + country)
//     // console.log(address)
//     let result = allAddress.push(address)
//     // console.log(result)
// }
// console.log(allAddress)

/********************************** */

    
