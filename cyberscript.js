const heading = document.getElementById("heading");
const petName = document.getElementById("petName");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const choosePet = document.getElementById("choosePet");

// IMAGES
const monkeyImage = document.getElementById("monkeyImage");
const rabbitImage = document.getElementById("rabbitImage");

const mEggImage = document.getElementById("mEggImage");
const rEggImage = document.getElementById("rEggImage");

// BACKGROUND IMGS
const rabbitBackground = document.getElementById("backgroundImage3");
const monkeyBackground = document.getElementById("backgroundImage2");
const backgroundImage1 = document.getElementById("backgroundImage1");
monkeyBackground.style.display = "none";
rabbitBackground.style.display = "none";


// BUTTONS
const monkeyButton = document.getElementById("monkeyButton");
const rabbitButton = document.getElementById("rabbitButton");

const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton");
const waterButton = document.getElementById("waterButton");
const cleanButton = document.getElementById("cleanButton");
const tickleButton = document.getElementById("tickleButton");

const petChoiceText = document.getElementById("petChoice");
const petNameHeading = document.getElementById("petNameHeading");
const namePet = document.getElementById("namePet");
const functionButtons = document.getElementById("functionButtons");

const hunger = document.getElementById("hunger");
const thirst = document.getElementById("thirst");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");
const petStatsTable = document.getElementById("petStatsTable");


//NEW TEXT STATUS BOX INSTEAD OF ALERTS
const statusBox = document.getElementById("userContent");

// -----------------------------------

statusBox.style.display = "none";
monkeyImage.style.display = "none";

rabbitImage.style.display = "none";

namePet.style.display = "none";
functionButtons.style.display = "none";

petStats.style.display = "none";
petStatsTable.style.display = "none";

monkeyButton.addEventListener("click", () => {
  console.log("clicked")
  if ((monkeyImage.style.display = "block")) {
    mEggImage.style.display = "none";
    rEggImage.style.display = "none";
    
    backgroundImage1.style.display = "none";
    
    rabbitButton.style.display = "none";
    monkeyButton.style.display = "none";
    
    rabbitImage.style.display = "none";
    petChoiceText.style.display = "none";
    namePet.style.display = "block";
    monkeyBackground.style.display = "block";
  }
  renderMonkeyData();
});

rabbitButton.addEventListener("click", () => {
  if ((rabbitImage.style.display = "block")) {
    rEggImage.style.display = "none";
    mEggImage.style.display = "none";
    
    backgroundImage1.style.display = "none";
    
    
    
    monkeyBackground.style.display = "none";
    monkeyImage.style.display = "none";
    monkeyButton.style.display = "none";
    rabbitButton.style.display = "none";
    tickleButton.style.display = "none";
    petChoiceText.style.display = "none";
    namePet.style.display = "block";
    rabbitBackground.style.display = "block";
  }
  renderRabbitData();
});

submit.addEventListener("click", () => {
  petName.textContent = input.value;
  submit.style.display = "none";
  input.style.display = "none";
  functionButtons.style.display = "block";
  // petStats.style.display = "block"
  petStatsTable.style.display = "block";
  statusBox.style.display = "block";
});

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

// class Tickling extends BasePet {
//     constructor(name, type, hungerLevel, thirstLevel, cleanLevel, happyLevel, tickleLevel) {
//     super(name, age, type, breed, colour, time);
//     this.lastMeds = mtime;
//     }
//     }

//    class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mtime) {
//     super(name, age, type, breed, colour, time);
//     this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//     this.lastMeds = time;
//     return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
//     }
//    }
// const bear = new PetMeds("Bear", 5, "Dog", "ST", "Grey", "17:00", "17:00")

// the tickling constructor which will have a value for tickling "true" could make a giggle sound or image change when clicked
// MONKEY DANCES AND HAPPINESS INCREASE?

// // PET CREATION AND CONSOLE LOG COMMANDS
const Monkey = new BasePet(petName, "monkey", 10, 10, 10, 10);
const Rabbit = new BasePet(petName, "rabbit", 100, 100, 100, 100);

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
console.log(Monkey.hungerLevel);
feedButton.addEventListener("click", () => {
  hunger.textContent = `Hunger: ${(Monkey.hungerLevel += 10)}`;
  hunger.textContent = `Hunger: ${(Rabbit.hungerLevel += 10)}`;
  console.log(Monkey.hungerLevel);
  renderMonkeyData();
  renderRabbitData();
});

waterButton.addEventListener("click", () => {
  thirst.textContent = `Thirst: ${(Monkey.thirstLevel += 10)}`;
  thirst.textContent = `Thirst: ${(Rabbit.thirstLevel += 10)}`;
});

cleanButton.addEventListener("click", () => {
  cleanliness.textContent = `Cleanliness: ${(Monkey.cleanLevel += 10)}`;
  cleanliness.textContent = `Cleanliness: ${(Rabbit.cleanLevel += 10)}`;
});

playButton.addEventListener("click", () => {
  happiness.textContent = `Happiness: ${(Monkey.happyLevel += 10)}`;
  happiness.textContent = `Happiness: ${(Rabbit.happyLevel += 10)}`;
});

tickleButton.addEventListener("click", () => {
  happiness.textContent = `Happiness: ${(Monkey.hungerLevel += 5)}`;
});

functionButtons.addEventListener("click", () => {
  console.log("I have been clicked");
  checkStats();
});

// Checks ALL the pet's stat
const checkStats = () => {
  // Checks the pet's HUNGER stat
  const checkHunger = () => {
    switch (Monkey.hungerLevel || Rabbit.hungerLevel) {
      case 200:
        alert(
          `Oh No! ${petName.textContent} has died from being overfed! Game Over...`
        );
        break;
      case 170:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from being overfed!`;
        break;
      case 150:
        statusBox.textContent = `${petName.textContent} is feeling stuffed!`;
        break;
      case 100:
        statusBox.textContent = `${petName.textContent} has a full tummy and is content!`;
        break;
      case 70:
        statusBox.textContent = `${petName.textContent} is feeling peckish!`;
        break;
      case 50:
        statusBox.textContent = `${petName.textContent}'s hunger is getting very hungry!`;
        break;
      case 20:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from hunger!`;
        break;
      case 0:
        alert(
          `Oh No! ${petName.textContent} has died from hunger! Game Over...`
        );
    }
  };

  // Checks the pet's THIRST stat
  const checkThirst = () => {
    switch (Monkey.thirstLevel || Rabbit.thirstLevel) {
      case 200:
        alert(
          `Oh No! ${petName.textContent} has drank too much & died! Game Over...`
        );
        break;
      case 170:
        statusBox.textContent = `Warning! ${petName.textContent} is nearing death from drinking too much!`;
        break;
      case 150:
        statusBox.textContent = `${petName.textContent} is feeling bloated from drinking too much water!`;
        break;
      case 100:
        statusBox.textContent = `${petName.textContent} is content with their current thirst level!`;
        break;
      case 70:
        statusBox.textContent = `${petName.textContent} is feeling a little thirsty!`;
        break;
      case 50:
        statusBox.textContent = `${petName.textContent} is feeling a very thirsty!`;
        break;
      case 20:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from thirst!`;
      case 0:
        alert(`${petName.textContent} has died from thirst! Game Over...`);
    }
  };

  // Checks the pet's CLEAN stat
  const checkClean = () => {
    switch (Monkey.cleanLevel || Rabbit.cleanLevel) {
      case 200:
        alert(
          `Oh No! ${petName.textContent} became too clean. Their immune system failed & they died! Game Over...`
        );
        break;
      case 170:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from being too clean! Some bacteria are friendly!`;
        break;
      case 150:
        statusBox.textContent = `${petName.textContent} is getting frustrated with all your cleaning!`;
        break;
      case 100:
        statusBox.textContent = `${petName.textContent} is looking clean & tidy. Perfect!`;
        break;
      case 70:
        statusBox.textContent = `${petName.textContent} is looking a little untidy...`;
        break;
      case 50:
        statusBox.textContent = `${petName.textContent} is looking very dirty!`;
        break;
      case 20:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from being so dirty!`;
      case 0:
        alert(
          `Oh No! ${petName.textContent} has died! The dirt mounted up and so did the germs. Game Over...`
        );
    }
  };

  // Checks the pet's HAPPY stat
  const checkHappy = () => {
    switch (Monkey.happyLevel || Rabbit.happyLevel) {
      case 200:
        alert(
          `Oh No! ${petName.textContent} has died from exhastion! Fun is great, but we need rest too. Game Over!`);
        break;
      case 170:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from having too much fun. Your pet needs rest!`;
        break;
      case 150:
        statusBox.textContent = `${petName.textContent} is feeling overstimulated!`;
        break;
      case 100:
        statusBox.textContent = `${petName.textContent} is feeling content and happy.`;
        break;
      case 70:
        statusBox.textContent = `${petName.textContent} is feeling a little bored...`;
        break;
      case 50:
        statusBox.textContent = `${petName.textContent} is feeling very sad!`;
        break;
      case 20:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from unhappiness!`;
      case 0:
        alert(
          `Oh No! ${petName.textContent} has died from unhappiness! Game Over...`
        );
    }
  };
  checkHunger();
  checkThirst();
  checkClean();
  checkHappy();
};

const monkeyTimingFunction = () => {
  setTimeout(() => {
    Monkey.hungerLevel -= 5, checkStats();
    Monkey.thirstLevel -= 5, checkStats();
    Monkey.cleanLevel -= 5, checkStats();
    Monkey.happyLevel -= 5, checkStats();
    renderMonkeyData();
    monkeyTimingFunction();
  }, 5000,);
}
monkeyTimingFunction();



const rabbitTimingFunction = () => {
  setTimeout(() => {
    Rabbit.hungerLevel -= 5, checkStats();
    Rabbit.thirstLevel -= 5, checkStats();
    Rabbit.cleanLevel -= 5, checkStats();
    Rabbit.happyLevel -= 5, checkStats();
    renderRabbitData();
    rabbitTimingFunction();
  }, 5000,);
}
rabbitTimingFunction();



// // 
// const monkeyTimeStop = (monkeyTimingFunction) => {
//   renderMonkeyData()
//     clearInterval((monkeyTimingFunction) => {
//         Monkey.hungerLevel === 0;
//          Monkey.thirstLevel === 0;
//           Monkey.cleanLevel === 0;
//            Monkey.happyLevel === 0;
//            monkeyTimeStop(monkeyTimingFunction);
//         }, 0)
//     }
// monkeyTimeStop(monkeyTimingFunction)

// clearTimeout(monkeyTimingFunction)

//

// const monkey timeStop = () => {
// clearTimeout(() => {
//     Monkey.hungerLevel == 0;
//      Monkey.thirstLevel == 0;
//       Monkey.cleanLevel == 0;
//        Monkey.happyLevel == 0

//    const monkeyTimeOut = () =>{
//     setInterval(function () {Monkey.hungerLevel -= 5}, 2000);




// GAME OVER - IF/SWITCH STATMENT FOR HEALTH STATS
// alert("GAME OVER");
//  document.location.reload()







// ISSUES --------------------------------y----------------------------------------------------------------------
       
        // 2) I have coded the countdown time that will deplete the pets stats but cannot for the absolute life of me figure out
        // how to get it to stop running once it reaches 0. or even to just get it to stop at all. The code for this is commented
        // out above. 

        // 3)When the user clicks the function buttons they add to/increase the pet stats, but as the code is now, it is adding to the
        // original basepet number of 100, not the current stat whatever that may be. For example, The countdown timer runs the
        // feed count down to 50, user clicks function button to feed which adds 10. This should result in 60. What's happening
        // instead is the stat shows 110 until the countdown runs again and then it reverts back to smaller number.

        // 4)As my code stands now, I have the statements re: pet stats set to be checked when user clicks one of the function buttons
        // but they also need to be checked when the stats change via the countdown. Can I merge the two or so i need to set a new check
        // stats under the countdown timer?































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
