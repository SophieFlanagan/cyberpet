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

const monkeyGiggle = document.getElementById("monkeyGiggle");

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
    petChoiceText.style.display = "none";
    namePet.style.display = "block";
    rabbitBackground.style.display = "block";
  }
  
});




// NAME SUBMIT EVENT
submit.addEventListener("click", () => {
  petName.textContent = input.value;
  submit.style.display = "none";
  input.style.display = "none";
  functionButtons.style.display = "block";
  petStatsTable.style.display = "block";
  statusBox.style.display = "block";


// Class Creation Choice
  if(monkeyImage.style.display == "block"){
    // Monkey = new Tickle(petName, "monkey", 10, 20, 30, 40, 10);
   renderMonkeyData()
    startMonkeyTimer();
    tickleFunction()

  } else if(rabbitImage.style.display == "block"){
  //  Rabbit = new BasePet(petName, "rabbit", 10, 20, 30, 40);
  renderRabbitData()
   startRabbitTimer();
  }

});

// BASEPET
class BasePet {
  constructor(name, type, hungerLevel, thirstLevel, cleanLevel, happyLevel) {
    this.name = name;
    this.type = type;
    this.hungerLevel = hungerLevel;
    this.thirstLevel = thirstLevel;
    this.cleanLevel = cleanLevel;
    this.happyLevel = happyLevel;
  }
}

class Tickle extends BasePet {
  constructor(name, type, hungerLevel, thirstLevel, cleanLevel, happyLevel, tickle) {
  super(name, type, hungerLevel, thirstLevel, cleanLevel, happyLevel)
    this.tickle = tickle
    // tickleFunction()
   
  }
  
  }

  
  
// FUNCTION FOR EXTENDED CLASS
const tickleFunction = () =>{
let tickleBtn = document.createElement('button')
tickleBtn.textContent = 'TICKLES!!!!!!!'
referenceNode = document.querySelector('.tButton-container')
referenceNode.insertAdjacentElement(`afterend`, tickleBtn)
tickleBtn.addEventListener("click", () =>{
Monkey.happyLevel += 10
renderMonkeyData()
monkeyGiggle.play()
})
}


const Monkey = new Tickle(petName, "monkey", 10, 20, 30, 40, 10);
const Rabbit = new BasePet(petName, "rabbit", 10, 20, 30, 40);

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
feedButton.addEventListener("click", () => {

  if(monkeyImage.style.display == "block"){
    Monkey.hungerLevel += 10
    renderMonkeyData();
    console.log(Monkey.hungerLevel, "i am hunger level when fed");
  } else {
    Rabbit.hungerLevel += 10
    renderRabbitData();
    console.log(Rabbit.hungerLevel, "i am hunger level when fed");
  }

});

waterButton.addEventListener("click", () => {
  if(monkeyImage.style.display == "block"){
    Monkey.thirstLevel += 10
    renderMonkeyData();
    console.log(Monkey.thirstLevel, "i am hunger level when fed");
  } else {
    Rabbit.thirstLevel += 10
    renderRabbitData();
    console.log(Rabbit.thirstLevel, "i am hunger level when fed");
  }
});

cleanButton.addEventListener("click", () => {
  if(monkeyImage.style.display == "block"){
    Monkey.cleanLevel += 10
    renderMonkeyData();
    console.log(Monkey.cleanLevel, "i am clean level when cleaned");
  } else {
    Rabbit.cleanLevel += 10
    renderRabbitData();
    console.log(Rabbit.cleanLevel, "i am clean level when cleaned");
  }
});

playButton.addEventListener("click", () => {
  if(monkeyImage.style.display == "block"){
    Monkey.happyLevel += 10
    renderMonkeyData();
    console.log(Monkey.happyLevel, "i am happy level when played with");
  } else {
    Rabbit.happyLevel += 10
    renderRabbitData();
    console.log(Rabbit.happyLevel, "i am happy level when played with");
  }
});

functionButtons.addEventListener("click", () => {
  console.log("I have been clicked");
  checkStats();
});

// Checks ALL the pet's stat
const checkStats = () => {
  // Checks the pet's HUNGER stat
  const checkHunger = () => {
    switch (Monkey.hungerLevel) {
      case 200:
        statusBox.textContent =
          `Oh No! ${petName.textContent} has died from being overfed! Game Over...`;      
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
        statusBox.textContent = `${petName.textContent} is getting very hungry!`;
        break;
      case 20:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from hunger!`;
        break;
      case 0:
        statusBox.textContent =
          `Oh No! ${petName.textContent} has died from hunger! Game Over...`;
        
    }
  };

  // Checks the pet's THIRST stat
  const checkThirst = () => {
    switch (Monkey.thirstLevel) {
      case 200:
        statusBox.textContent =
          `Oh No! ${petName.textContent} got over-hydrated & died! Game Over...`;
         break;
      case 170:
        statusBox.textContent = `Warning! ${petName.textContent} is over-hydrated!`
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
        statusBox.textContent = `${petName.textContent} is dehydated!`;
        break;
      case 20:
        statusBox.textContent = `Warning! ${petName.textContent} is dying from dehydation!`;
      case 0:
        statusBox.textContent = `${petName.textContent} has died from thirst! Game Over...`
    }
  };

  // Checks the pet's CLEAN stat
  const checkClean = () => {
    switch (Monkey.cleanLevel) {
      case 200:
        statusBox.textContent =
          `Oh No! ${petName.textContent} became too clean. Their immune system failed & they died! Game Over...`;
        
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
        statusBox.textContent =
          `Oh No! ${petName.textContent} has died! The dirt mounted up and so did the germs. Game Over...`;
        
    }
  };

  // Checks the pet's HAPPY stat
  const checkHappy = () => {
    switch (Monkey.happyLevel) {
      case 200:
        statusBox.textContent =
          `Oh No! ${petName.textContent} has died from exhastion! Fun is great, but we need rest too. Game Over!`;
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
        statusBox.textContent =
          `Oh No! ${petName.textContent} has died from unhappiness! Game Over...`;
        
    }
  };
  checkHunger();
  checkThirst();
  checkClean();
  checkHappy();
};


//MONKEY TIMER Depletes the monkeys health stats
const startMonkeyTimer = () =>{
const timer = setInterval(() => {

  // if monkey button was pressed then run this data
  Monkey.hungerLevel -= 5, checkStats();
  Monkey.thirstLevel -= 5, checkStats();
  Monkey.cleanLevel -= 5, checkStats();
  Monkey.happyLevel -= 5, checkStats();
  renderMonkeyData();

  console.log(Monkey.hungerLevel, "i am monkey hunger");
  if (Monkey.hungerLevel === 0 || Monkey.thirstLevel === 0 || Monkey.cleanLevel === 0 || Monkey.happyLevel === 0 ) {
    clearInterval(timer);
    renderMonkeyData();


  }
}, 5000);
}

// RABBIT TIMER
const startRabbitTimer = () =>{
  const timer = setInterval(() => {
  // if rabbit pressed then run this data
  Rabbit.hungerLevel -= 5, checkStats();
  Rabbit.thirstLevel -= 5, checkStats();
  Rabbit.cleanLevel -= 5, checkStats();
  Rabbit.happyLevel -= 5, checkStats();
  renderRabbitData();
  
  console.log(Rabbit.hungerLevel, "i am rabbit hunger");
  if (Rabbit.hungerLevel === 0 || Rabbit.thirstLevel === 0 || Rabbit.cleanLevel === 0 || Rabbit.happyLevel === 0 ) {
    clearInterval(timer);
    renderRabbitData();

  }
}, 5000);
}







// Game Over alert and reload at 200 or 0
// const gameOver = () => {
//   checkStats = () => {
//   renderMonkeyData()
//   renderRabbitData()
//     switch (Monkey.hungerLevel || Monkey.thirstLevel || Monkey.cleanLevel || Monkey.happyLevel || Rabbit.hungerLevel || Rabbit.thirstLevel || Rabbit.cleanLevel || Rabbit.happyLevel) {
//       case 200:
//         alert("GAME OVER");
//         document.location.reload()
//         break;
//         case 0:
//         alert("GAME OVER");
//         document.location.reload()
//         break;
//     }
//   } 