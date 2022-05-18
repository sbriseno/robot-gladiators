var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

  // repeat and execute as long as the enemy-robot is alive 
  while(playerHealth >0 && enemyHealth > 0) {
   // place fight function code block here . . .
  

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
    break
  } else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to skip the fight?")

//if yes (true), leave fight

  if(confirmSkip) {
    window.alert(playerName + " has decided to skup this fight. Goodbye!")

    //subtract money from playerMoney for skipping

    playerMoney = playerMoney - 2;
  }

// if no (false) ask question again by running fight () again

else {
  fight();
}

  window.alert(playerName + " has chosen to skip the fight!");
    } else {
    window.alert("You need to choose a valid option. Try again!");
    }
  } 
};

// loop statement
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth=50
  fight(pickedEnemyName);
 }

//game states
// lose - player robots health is zero or less

