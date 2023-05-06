// Code Challenges

/*-------------------------
1)
The loop is currently printing the index of 
the person array. Switch it so it is printing
the values instead.
----------------------*/
const person = ["Sofia", 30, "Barcelona", true];

// using for...of loop 

for (let value of person) {
    console.log(value);
}

// using for loop

for(let i=0; i<person.length; i++){
    console.log(person[i])
}

/*-------------------------------
2)
Write a loop that prints all the values in pet.
--------------------------------*/

const pet = ["spot", 2, "dog", "spotted"];

// using for...of loop 

for(let value of pet){
    console.log(value);
}

// using for loop

for(let i=0; i<pet.length; i++){
    console.log(pet[i])
}

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

let features = [];
let carFeatures = "Car Features: "

// adding features to an empty array

features.push("automatic", 2015, "HondaCity", "silver");
console.log(features);
// ['automatic', 2015, 'HondaCity', 'silver']
 
for (let i = 0; i<features.length; i++){
    console.log(features[i]);
    if(i === features.length-1) {
        carFeatures += `${features[i]}.`; 
        // last feature add with "."
    } else {
        carFeatures += `${features[i]}, `; 
        // else anywhere in the string add with
        //comma and space ", "
    }    
}
console.log(carFeatures);