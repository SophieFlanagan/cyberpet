const heading = document.getElementById("heading")
const petName = document.getElementById("petName");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const choosePet = document.getElementById("choosePet")

const eggImage = document.getElementById("eggImage");
const rabbitImage = document.getElementById("rabbitImage");
const monkeyImage = document.getElementById("monkeyImage")

const monkeyButton = document.getElementById("monkeyButton");
const rabbitButton = document.getElementById("rabbitButton");

const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton")
const waterButton = document.getElementById("waterButton")
const cleanButton = document.getElementById("cleanButton")
const tickleButton = document.getElementById("tickleButton")

const petChoiceText = document.getElementById("petChoice")
const petNameHeading = document.getElementById("petNameHeading")
const namePet = document.getElementById("namePet")
const functionButtons = document.getElementById("functionButtons")

const hunger = document.getElementById("hunger")
const thirst = document.getElementById("thirst")
const happiness = document.getElementById("happiness")
const cleanliness = document.getElementById("cleanliness")
const petStatsTable = document.getElementById("petStatsTable")



//NEW TEXT STATUS BOX INSTEAD OF ALERTS
const statusBox = document.getElementById("statusBox")


// -----------------------------------


monkeyImage.style.display = "none"
rabbitImage.style.display = "none"
namePet.style.display = "none"
functionButtons.style.display = "none"

petStats.style.display = "none"
petStatsTable.style.display = "none"

monkeyButton.addEventListener("click", () =>{
    if (monkeyImage.style.display = "block"){
        eggImage.style.display = "none";
        rabbitImage.style.display = "none"
        rabbitButton.style.display = "none"
        monkeyButton.style.display = "none"
        petChoiceText.style.display = "none"
        namePet.style.display = "block"
    }
renderMonkeyData()
})

rabbitButton.addEventListener("click", () =>{
    if(rabbitImage.style.display = "block"){
        eggImage.style.display = "none";
        monkeyImage.style.display = "none"
        monkeyButton.style.display = "none"
        rabbitButton.style.display = "none"
        tickleButton.style.display = "none"
        petChoiceText.style.display = "none"
        namePet.style.display = "block"
    }
    renderRabbitData()
})


    submit.addEventListener("click", () =>{
        petName.textContent = input.value;
        submit.style.display = "none";
        input.style.display = "none"
        functionButtons.style.display = "block"
        // petStats.style.display = "block"
        petStatsTable.style.display = "block"
    
    })



// BASEPET
class BasePet {
    constructor(name, type, hungerLevel, thirstLevel, cleanLevel, happyLevel) {
        this.name = name;
        this.type = type;
        // this.age = age;
        // this.healthLevel = healthLevel;
        this.hungerLevel = hungerLevel;
        this.thirstLevel = thirstLevel;
        this.cleanLevel = cleanLevel;
        this.happyLevel = happyLevel;
    }
}

class Tickling extends BasePet {
    constructor(name, type, hungerLevel, thirstLevel, cleanLevel, happyLevel, tickleLevel) {
    super(name, age, type, breed, colour, time);
    this.lastMeds = mtime;
    }
    }
    



   class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
    super(name, age, type, breed, colour, time);
    this.lastMeds = mtime;
    }
    giveMeds (time) {
    this.lastMeds = time;
    return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
    }
   }
// const bear = new PetMeds("Bear", 5, "Dog", "ST", "Grey", "17:00", "17:00")



// the tickling constructor which will have a value for tickling "true" could make a giggle sound or image change when clicked
// MONKEY DANCES AND HAPPINESS INCREASE?


// // PET CREATION AND CONSOLE LOG COMMANDS
const Monkey = new BasePet(petName, "monkey", 40, 100, 100, 100)
const Rabbit = new BasePet(petName, "rabbit", 40, 100, 100, 100)



// Function - This renders the monkeys data
function renderMonkeyData() {
    hunger.textContent = `Hunger: ${Monkey.hungerLevel}`;
    thirst.textContent = `Thirst: ${Monkey.thirstLevel}`;
    cleanliness.textContent = `Cleanliness: ${Monkey.cleanLevel}`;
    happiness.textContent = `Happiness: ${Monkey.happyLevel}`;
}

// Function - This renders the rabbits data
function renderRabbitData() {
    hunger.textContent = `Hunger: ${Rabbit.hungerLevel}`;
    thirst.textContent = `Thirst: ${Rabbit.thirstLevel}`;
    cleanliness.textContent = `Cleanliness: ${Rabbit.cleanLevel}`;
    happiness.textContent = `Happiness: ${Rabbit.happyLevel}`;
}



// function hunger.textcontent = this.hungerLevel
console.log(Monkey.hungerLevel)
feedButton.addEventListener("click", () =>{
     hunger.textContent = `Hunger: ${Monkey.hungerLevel += 10}`
     hunger.textContent = `Hunger: ${Rabbit.hungerLevel += 10}`;
     console.log(Monkey.hungerLevel)
     renderMonkeyData()
     renderRabbitData()
    })

waterButton.addEventListener("click", () =>{
     thirst.textContent = `Thirst: ${Monkey.thirstLevel += 10}`
     thirst.textContent = `Thirst: ${Rabbit.thirstLevel += 10}`
    })

cleanButton.addEventListener("click", () =>{
     cleanliness.textContent = `Cleanliness: ${Monkey.cleanLevel += 10}`
     cleanliness.textContent = `Cleanliness: ${Rabbit.cleanLevel += 10}`
    })

playButton.addEventListener("click", () =>{
     happiness.textContent = `Happiness: ${Monkey.happyLevel += 10}`
     happiness.textContent = `Happiness: ${Rabbit.happyLevel += 10}`
    })

tickleButton.addEventListener("click", () =>{
        happiness.textContent = `Happiness: ${Monkey.hungerLevel += 5}`;

    })







functionButtons.addEventListener("click", () =>{ console.log("I have been clicked")
    checkStats()
}) 


// Checks ALL the pet's stat
const checkStats = () =>{

    // Checks the pet's HUNGER stat
    const checkHunger = () =>{
        switch(Monkey.hungerLevel || Rabbit.hungerLevel){
            case 200:
            statusBox.textContent = `Oh No! ${petName.textContent} has died from being overfed! Game Over...`
            break
            case 170:
            statusBox.textContent = `Warning! ${petName.textContent} is dying from being overfed!`
            break
            case 150:
            statusBox.textContent = `${petName.textContent} is feeling stuffed!`
            break
            case 100:
            statusBox.textContent = `${petName.textContent} has a full tummy and is content!`
            break
            case 70:
            statusBox.textContent = `${petName.textContent} is feeling peckish!`
            break
            case 50:
            statusBox.textContent = `${petName.textContent}'s hunger is ${Monkey.hungerLevel}`
            break
            case 20:
            // alert(`Warning! ${petName.textContent} is dying from hunger!`)
            statusBox.textContent = `Warning! ${petName.textContent} is dying from hunger!`
            break
            case 0:
            // alert(`Oh No! ${petName.textContent} has died from hunger! Game Over...`)
            statusBox.textContent = `Oh No! ${petName.textContent} has died from hunger! Game Over...`

        }}

    // Checks the pet's THIRST stat
    const checkThirst = () =>{
        switch(Monkey.thirstLevel || Rabbit.thirstLevel){
            case 200:
            alert(`Oh No! ${petName.textContent} has drank too much & died! Game Over...`)
            break
            case 170:
            alert(`Warning! ${petName.textContent} is nearing death from drinking too much!`)
            break
            case 150:
            alert(`${petName.textContent} is feeling bloated from drinking too much water!`)
            break
            case 100:
            alert(`${petName.textContent} is content with their current thirst level!`)
            break
            case 70:
            alert(`${petName.textContent} is feeling a little thirsty!`)
            break
            case 50:
            alert(`${petName.textContent} is feeling a very thirsty!`)
            break
            case 20:
            alert(`Warning! ${petName.textContent} is dying from thirst!`)
            case 0:
            alert(`${petName.textContent} has died from thirst! Game Over...`)
    
        }}


        // Checks the pet's CLEAN stat
        const checkClean = () =>{
            switch(Monkey.cleanLevel || Rabbit.cleanLevel){
                case 200:
                alert(`Oh No! ${petName.textContent} became too clean. Their immune system failed & they died! Game Over...`)
                break
                case 170:
                alert(`Warning! ${petName.textContent} is dying from being too clean! Some bacteria are friendly!`)
                break
                case 150:
                alert(`${petName.textContent} is getting frustrated with all your cleaning!`)
                break
                case 100:
                alert(`${petName.textContent} is looking clean & tidy. Perfect!`)
                break
                case 70:
                alert(`${petName.textContent} is looking a little untidy...`)
                break
                case 50:
                alert(`${petName.textContent} is looking very dirty!`)
                break
                case 20:
                alert:(`Warning! ${petName.textContent} is dying from being so dirty!`)
                case 0:
                alert(`Oh No! ${petName.textContent} has died! The dirt mounted up and so did the germs. Game Over...`)
        
        }}

        // Checks the pet's HAPPY stat
        const checkHappy = () =>{
            switch(Monkey.happyLevel || Rabbit.happyLevel){
                case 200:
                alert(`Oh No! ${petName.textContent} has died from exhastion! Fun is great, but we need rest too. Game Over!`)
                break
                case 170:
                alert(`Warning! ${petName.textContent} is dying from having too much fun. Your pet needs rest!`)
                break
                case 150:
                alert(`${petName.textContent} is feeling overstimulated!`)
                break
                case 100:
                alert(`${petName.textContent} is feeling content and happy.`)
                break
                case 70:
                alert(`${petName.textContent} is feeling a little bored...`)
                break
                case 50:
                alert(`${petName.textContent} is feeling very sad!`)
                break
                case 20:
                alert(`Warning! ${petName.textContent} is dying from unhappiness!`)
                case 0:
                alert(`Oh No! ${petName.textContent} has died from unhappiness! Game Over...`)
        
        }}
        checkHunger()
        checkThirst()
        checkClean()
        checkHappy()
        }

  
        




















// // PET CREATION AND CONSOLE LOG COMMANDS



// const petImage = document.getElementById("petImage");

// const eggImage = document.getElementById("eggImage");
// const rabbitImage = document.getElementById("rabbitImage");
// const monkeyImage = document.getElementById("monkeyImage");





// rabbitButton.addEventListener("click", () => {
//     heading.style.color = "red";
    // rabbitImage.style.display = "block";
    // if (rabbitImage.style.display = "block") {
    //     monkeyImage.style.display = "none";
    //     eggImage.style.display = "none";
    // }
// })


// button.addEventListener("click",()=>{
//     heading.style.color = input.value;
// })













// BASEPET

// healthCheck() {

// }




// PET CREATION AND CONSOLE LOG COMMANDS
// const Monkey = new BasePet("Terry", `monkey`, 27, 100, 100, 100, 100);
// console.log(Monkey);

// PET CREATION AND CONSOLE LOG COMMANDS











// FUNCTIONS

//     moodCheck () {
//         if (this.health >= 70) {
//             this.mood = this.moodTypes[0]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//         else if (this.health <=30) {
//             this.mood = this.moodTypes[1]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//         else {
//             this.mood = this.moodTypes[2]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//     }

// }


// FUNCTIONS












// FUNCTIONS TO CONVERT

//     moodCheck () {
//         if (this.health >= 70) {
//             this.mood = this.moodTypes[0]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//         else if (this.health <=30) {
//             this.mood = this.moodTypes[1]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//         else {
//             this.mood = this.moodTypes[2]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//     }

// }


// // FUNCTIONS TO CONVERT








// CODE BEFORE CHANGING ALERTS


// const checkHunger = () =>{
//     switch(Monkey.hungerLevel || Rabbit.hungerLevel){
//         case 200:
//         // alert(`Oh No! ${petName.textContent} has died from being overfed! Game Over...`)
//         statusBox.textContent = `Oh No! ${petName.textContent} has died from being overfed! Game Over...`
//         break
//         case 170:
//         // alert(`Warning! ${petName.textContent} is dying from being overfed!`)
//         statusBox.textContent = `Warning! ${petName.textContent} is dying from being overfed!`
//         break
//         case 150:
//         // alert(`${petName.textContent} is feeling stuffed!`)
//         statusBox.textContent = `${petName.textContent} is feeling stuffed!`
//         break
//         case 100:
//         // alert(`${petName.textContent} has a full tummy and is content!`)
//         statusBox.textContent = `${petName.textContent} has a full tummy and is content!`
//         break
//         case 70:
//         // alert(`${petName.textContent} is feeling peckish!`)
//         statusBox.textContent = `${petName.textContent} is feeling peckish!`
//         break
//         case 50:
//         // alert(`${petName.textContent} is feeling very hungry!`)
//         statusBox.textContent = `${petName.textContent}'s hunger is ${Monkey.hungerLevel}`
//         break
//         case 20:
//         // alert(`Warning! ${petName.textContent} is dying from hunger!`)
//         statusBox.textContent = `Warning! ${petName.textContent} is dying from hunger!`
//         break
//         case 0:
//         // alert(`Oh No! ${petName.textContent} has died from hunger! Game Over...`)
//         statusBox.textContent = `Oh No! ${petName.textContent} has died from hunger! Game Over...`

//     }}





