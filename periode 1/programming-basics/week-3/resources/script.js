let a = "value1";

// switch statement

switch (a) {
    case "value1":
        console.log(a)
        break;

    case "value2":
        console.log(a)
        break;

    default:
        break;
}

//let weight = prompt("give your weight in kg");
//let height = prompt("give your height in meters");

/*
script to calculate your BMI
*/

// give your variables
let weight = 70;
let height = 1.8;

// calculate the BMI and make it have 1 decimal
let bmi = (weight / height ** 2).toFixed(1);

//print to console based on bmi number
if (bmi < 18.5) {
  console.log(
    `Your BMi is ${bmi} thats under weight,	start with personal trainer.`
  );
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(
    `Your BMi is ${bmi} thats normal weight,	start with any programme.`
  );
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log(
    `Your BMi is ${bmi} thats slightly over weight,	start with cardio training.`
  );
} else if (bmi >= 30) {
  console.log(`Your BMi is ${bmi} thats obese,	start with personal trainer.`);
}
