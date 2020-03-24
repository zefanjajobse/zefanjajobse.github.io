/**
 * laprounds array to object / json
 */
const laprounds2 = {
    lapOne: 55.99, 
    lapTwo: 63.00, 
    lapThree: 63.01, 
    lapFour: 54.01, 
    lapFive: 62.79, 
    lapSix: 52.88, 
    lapSeven: 53.10, 
    lapEight: 54.12
}

/**
 * print info for every teacher
 */
const teachers2 = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: "40",
        salary: "100",
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek;
        },
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: "40",
        salary: "100",
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek;
        },
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: "40",
        salary: "100",
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek;
        },
    }
]

teachers2.forEach(element => {
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer`)
});

/**
 * add salary's per hour
 */

teachers2.forEach(element => {
    console.log(element.salaryPerHour())
});

