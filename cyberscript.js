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
const statusBox1 = document.getElementById("statusBox1");
const statusBox2 = document.getElementById("statusBox2");
const statusBox3 = document.getElementById("statusBox3");
const statusBox4 = document.getElementById("statusBox4");

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
  console.log("clicked");
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
  checkStats();

  // Class Creation Choice
  if (monkeyImage.style.display == "block") {
    // Monkey = new Tickle(petName, "monkey", 10, 20, 30, 40, 10);
    renderMonkeyData();
    startMonkeyTimer();
    tickleFunction();
  } else if (rabbitImage.style.display == "block") {
    //  Rabbit = new BasePet(petName, "rabbit", 10, 20, 30, 40);
    renderRabbitData();
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
  constructor(
    name,
    type,
    hungerLevel,
    thirstLevel,
    cleanLevel,
    happyLevel,
    tickle
  ) {
    super(name, type, hungerLevel, thirstLevel, cleanLevel, happyLevel);
    this.tickle = tickle;
    // tickleFunction()
  }
}

// FUNCTION FOR EXTENDED CLASS
const tickleFunction = () => {

  let tickleBtn = document.createElement("button");
  tickleBtn.textContent = "TICKLE";
  referenceNode = document.querySelector(".tButton-container");
  referenceNode.insertAdjacentElement(`afterend`, tickleBtn);
  tickleBtn.className = "tickleBtn";
  tickleBtn.addEventListener("click", () => {
    Monkey.happyLevel += 15;
    renderMonkeyData();
    monkeyGiggle.play();
  });
};

const Monkey = new Tickle(petName, "monkey", 100, 100, 100, 100, 100);
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
feedButton.addEventListener("click", () => {
  if (monkeyImage.style.display == "block") {
    Monkey.hungerLevel += 10;
    renderMonkeyData();
    console.log(Monkey.hungerLevel, "i am hunger level when fed");
  } else {
    Rabbit.hungerLevel += 10;
    renderRabbitData();
    console.log(Rabbit.hungerLevel, "i am hunger level when fed");
  }
});

waterButton.addEventListener("click", () => {
  if (monkeyImage.style.display == "block") {
    Monkey.thirstLevel += 10;
    renderMonkeyData();
    console.log(Monkey.thirstLevel, "i am thirst level when thirstbutton");
  } else {
    Rabbit.thirstLevel += 10;
    renderRabbitData();
    console.log(Rabbit.thirstLevel, "i am thirst level when thirstbutton");
  }
});

cleanButton.addEventListener("click", () => {
  if (monkeyImage.style.display == "block") {
    Monkey.cleanLevel += 10;
    renderMonkeyData();
    console.log(Monkey.cleanLevel, "i am clean level when cleaned");
  } else {
    Rabbit.cleanLevel += 10;
    renderRabbitData();
    console.log(Rabbit.cleanLevel, "i am clean level when cleaned");
  }
});

playButton.addEventListener("click", () => {
  if (monkeyImage.style.display == "block") {
    Monkey.happyLevel += 10;
    renderMonkeyData();
    console.log(Monkey.happyLevel, "i am happy level when played with");
  } else {
    Rabbit.happyLevel += 10;
    renderRabbitData();
    console.log(Rabbit.happyLevel, "i am happy level when played with");
  }
});

functionButtons.addEventListener("click", () => {
  console.log("I have been clicked, checking stats");
  checkStats();
});

// Checks ALL the pet's stat
const checkStats = () => {
  // Checks the pet's HUNGER stat
  if(monkeyImage.style.display == "block"){
  const checkHunger = () => {
    if(Monkey.hungerLevel >= 200){
      renderMonkeyData()
      refresh()
    } else{
      console.log("fail")
    }
    switch (Monkey.hungerLevel) {
      case 200:
        statusBox1.textContent = `Oh No! ${petName.textContent} has died from being overfed!`;
        break;
      case 170:
        statusBox1.textContent = `Warning! ${petName.textContent} is dying from eating too much!`;
        break;
      case 150:
        statusBox1.textContent = `${petName.textContent} is feeling stuffed.`;
        break;
      case 100:
        statusBox1.textContent = `${petName.textContent} has a full tummy and is content.`;
        break;
      case 70:
        statusBox1.textContent = `${petName.textContent} is feeling peckish.`;
        break;
      case 50:
        statusBox1.textContent = `${petName.textContent} is getting very hungry.`;
        break;
      case 20:
        statusBox1.textContent = `Warning! ${petName.textContent} is dying from hunger!`;
        break;
      case 0:
        statusBox1.textContent = `Oh No! ${petName.textContent} has died from hunger!`;
       
    }
  }

  // Checks the pet's THIRST stat
  const checkThirst = () => {
    if(Monkey.hungerThirst >= 200){
      renderMonkeyData()
      refresh()
    } else{
      console.log("fail")
    }    
  
   switch (Monkey.thirstLevel) {
      case 200:
        statusBox2.textContent = `Oh No! ${petName.textContent} got over-hydrated & died!`;
        break;
      case 170:
        statusBox2.textContent = `Warning! ${petName.textContent} is over-hydrated!`;
        break;
      case 150:
        statusBox2.textContent = `${petName.textContent} is bloated from drinking too much water.`;
        break;
      case 100:
        statusBox2.textContent = `${petName.textContent}'s water level is perfect.`;
        break;
      case 70:
        statusBox2.textContent = `${petName.textContent} is feeling a little thirsty.`;
        break;
      case 50:
        statusBox2.textContent = `${petName.textContent} is dehydated.`;
        break;
      case 20:
        statusBox2.textContent = `Warning! ${petName.textContent} is dying from thirst!`;
        break;
      case 0:
        statusBox2.textContent = `Oh No! ${petName.textContent} has died from dehydration!`;
    }
  };

  // Checks the pet's CLEAN stat
  const checkClean = () => {
    if(Monkey.cleanLevel >= 200){
      renderMonkeyData()
      refresh()
    } else{
      console.log("fail")
    }
    switch (Monkey.cleanLevel) {
      case 200:
        statusBox3.textContent = `Oh No! ${petName.textContent} has died from an over-active immune-system!`;
        break;
      case 170:
        statusBox3.textContent = `Warning! ${petName.textContent} is dying from being too clean!`;
        break;
      case 150:
        statusBox3.textContent = `${petName.textContent} is frustrated with all your cleaning.`;
        break;
      case 100:
        statusBox3.textContent = `${petName.textContent} is looking clean & tidy.`;
        break;
      case 70:
        statusBox3.textContent = `${petName.textContent} is looking a little disheveled.`;
        break;
      case 50:
        statusBox3.textContent = `${petName.textContent} is looking very dirty.`;
        break;
      case 20:
        statusBox3.textContent = `Warning! ${petName.textContent} is dying from being so dirty!`;
        break;
      case 0:
        statusBox3.textContent = `Oh No! ${petName.textContent} has died from alll the filth!`;
    }
  };

  // Checks the pet's HAPPY stat
  const checkHappy = () => {
    if(Monkey.happyLevel >= 200){
      renderMonkeyData()
      refresh()
    } else{
      console.log("fail")
    }
    switch (Monkey.happyLevel) {
      case 200:
        statusBox4.textContent = `Oh No! ${petName.textContent} has died from exhastion!`;
        break;
      case 170:
        statusBox4.textContent = `Warning! ${petName.textContent} is dying. Your pet needs rest!`;
        break;
      case 150:
        statusBox4.textContent = `${petName.textContent} is feeling overstimulated.`;
        break;
      case 100:
        statusBox4.textContent = `${petName.textContent} is feeling content and happy.`;
        break;
      case 70:
        statusBox4.textContent = `${petName.textContent} is feeling a little bored.`;
        break;
      case 50:
        statusBox4.textContent = `${petName.textContent} is feeling very sad.`;
        break;
      case 20:
        statusBox4.textContent = `Warning! ${petName.textContent} is dying from unhappiness!`;
        break;
      case 0:
        statusBox4.textContent = `Oh No! ${petName.textContent} has died from unhappiness!`;
    }
  }
  checkHunger();
  checkThirst();
  checkClean();
  checkHappy();
} else {
  const checkHunger = () => {

    if(Rabbit.hungerLevel >= 200){
      renderRabbitData()
      refresh()
    } else{
      console.log("fail")
    }

    switch (Rabbit.hungerLevel) {
      case 200:
        statusBox1.textContent = `Oh No! ${petName.textContent} has died from being overfed!`;
        break;
      case 170:
        statusBox1.textContent = `Warning! ${petName.textContent} is dying from eating too much!`;
        break;
      case 150:
        statusBox1.textContent = `${petName.textContent} is feeling stuffed.`;
        break;
      case 100:
        statusBox1.textContent = `${petName.textContent} has a full tummy and is content.`;
        break;
      case 70:
        statusBox1.textContent = `${petName.textContent} is feeling peckish.`;
        break;
      case 50:
        statusBox1.textContent = `${petName.textContent} is getting very hungry.`;
        break;
      case 20:
        statusBox1.textContent = `Warning! ${petName.textContent} is dying from hunger!`;
        break;
      case 0:
        statusBox1.textContent = `Oh No! ${petName.textContent} has died from hunger!`;
    }
  }

  // Checks the pet's THIRST stat
  const checkThirst = () => {
  
    if(Rabbit.thirstLevel >= 200){
      renderRabbitData()
      refresh()
    } else{
      console.log("fail")
    }

   switch (Rabbit.thirstLevel) {
      case 200:
        statusBox2.textContent = `Oh No! ${petName.textContent} got over-hydrated & died!`;
        break;
      case 170:
        statusBox2.textContent = `Warning! ${petName.textContent} is over-hydrated!`;
        break;
      case 150:
        statusBox2.textContent = `${petName.textContent} is bloated from drinking too much water.`;
        break;
      case 100:
        statusBox2.textContent = `${petName.textContent}'s water level is perfect.`;
        break;
      case 70:
        statusBox2.textContent = `${petName.textContent} is feeling a little thirsty.`;
        break;
      case 50:
        statusBox2.textContent = `${petName.textContent} is dehydated.`;
        break;
      case 20:
        statusBox2.textContent = `Warning! ${petName.textContent} is dying from thirst!`;
        break;
      case 0:
        statusBox2.textContent = `Oh No! ${petName.textContent} has died from dehydration!`;
    }
  };

  // Checks the pet's CLEAN stat
  const checkClean = () => {
    if(Rabbit.cleanLevel >= 200){
      renderRabbitData()
      refresh()
    } else{
      console.log("fail")
    }
    switch (Rabbit.cleanLevel) {
      case 200:
        statusBox3.textContent = `Oh No! ${petName.textContent} has died from an over-active immune-system!`;
      break;
      case 170:
        statusBox3.textContent = `Warning! ${petName.textContent} is dying from being too clean!`;
        break;
      case 150:
        statusBox3.textContent = `${petName.textContent} is frustrated with all your cleaning.`;
        break;
      case 100:
        statusBox3.textContent = `${petName.textContent} is looking clean & tidy.`;
        break;
      case 70:
        statusBox3.textContent = `${petName.textContent} is looking a little disheveled.`;
        break;
      case 50:
        statusBox3.textContent = `${petName.textContent} is looking very dirty.`;
        break;
      case 20:
        statusBox3.textContent = `Warning! ${petName.textContent} is dying from being so dirty!`;
        break;
      case 0:
        statusBox3.textContent = `Oh No! ${petName.textContent} has died from alll the filth!`;
    }
  };

  // Checks the pet's HAPPY stat
  const checkHappy = () => {
    
    if(Rabbit.happyLevel >= 200){
      renderRabbitData()
      refresh()
    } else{
      console.log("fail")
    }

    switch (Rabbit.happyLevel) {
      case 200:
        statusBox4.textContent = `Oh No! ${petName.textContent} has died from exhastion!`;
        break;
      case 170:
        statusBox4.textContent = `Warning! ${petName.textContent} is dying. Your pet needs rest!`;
        break;
      case 150:
        statusBox4.textContent = `${petName.textContent} is feeling overstimulated.`;
        break;
      case 100:
        statusBox4.textContent = `${petName.textContent} is feeling content and happy.`;
        break;
      case 70:
        statusBox4.textContent = `${petName.textContent} is feeling a little bored.`;
        break;
      case 50:
        statusBox4.textContent = `${petName.textContent} is feeling very sad.`;
        break;
      case 20:
        statusBox4.textContent = `Warning! ${petName.textContent} is dying from unhappiness!`;
        break;
      case 0:
        statusBox4.textContent = `Oh No! ${petName.textContent} has died from unhappiness!`;
    }
  }
  checkHunger();
  checkThirst();
  checkClean();
  checkHappy();
}
  
};

//MONKEY TIMER Depletes the monkeys health stats
const startMonkeyTimer = () => {
  const timer = setInterval(() => {
    // if monkey button was pressed then run this data
    (Monkey.hungerLevel -= 5), checkStats();
    (Monkey.thirstLevel -= 5), checkStats();
    (Monkey.cleanLevel -= 5), checkStats();
    (Monkey.happyLevel -= 5), checkStats();
    renderMonkeyData();

    console.log(Monkey.hungerLevel, "i am monkey hunger");
    if (
      Monkey.hungerLevel === 0 ||
      Monkey.thirstLevel === 0 ||
      Monkey.cleanLevel === 0 ||
      Monkey.happyLevel === 0
    ) {
      clearInterval(timer);
      renderMonkeyData();
      refresh();
    }
  }, 5000);
};

// RABBIT TIMER
const startRabbitTimer = () => {
  const timer = setInterval(() => {
    // if rabbit pressed then run this data
    (Rabbit.hungerLevel -= 5), checkStats();
    (Rabbit.thirstLevel -= 5), checkStats();
    (Rabbit.cleanLevel -= 5), checkStats();
    (Rabbit.happyLevel -= 5), checkStats();
    renderRabbitData();

    console.log(Rabbit.hungerLevel, "i am rabbit hunger");
    if (
      Rabbit.hungerLevel === 0 ||
      Rabbit.thirstLevel === 0 ||
      Rabbit.cleanLevel === 0 ||
      Rabbit.happyLevel === 0
    ) {
      clearInterval(timer);
      renderRabbitData();
      refresh();
    }
  }, 5000);
};

// to do - Create reload button to reset game. 
const refresh = () =>{
  alert(`Oh No! ${petName.textContent} has died! Game Over...`)
  document.location.reload()
}

// game over - if states hit 200
// const gameOver = ()=> {
//   checkStats();
//   renderMonkeyData()
// if(
//   Monkey.hungerLevel == 200 ||
//   Monkey.thirstLevel == 200 ||
//   Monkey.cleanLevel == 200 ||
//   Monkey.happyLevel == 200
// ) {
//   refresh();
//   console.log("i have been called")
// }
// }

// gameOver()