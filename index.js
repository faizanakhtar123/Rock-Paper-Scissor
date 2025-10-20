let score = {
  computer: 0,
  user: 0,
  tie: 0,
  updateScore: function () {
    this.saveScore();
    document.querySelector("#score").innerHTML = `
  score: Computer Won: ${this.computer}, User Won: ${this.user}, Tie: ${this.tie}`;
  },
  saveScore: function () {
    let scoreStr = JSON.stringify(this);
    localStorage.setItem("score", scoreStr);
    console.log(`Socre saved: ${scoreStr}`);
  },
};
function initialize() {
  let scoreStr = localStorage.getItem("score");
  if (scoreStr) {
    console.log(`previus scored found ${scoreStr}`);
    let scoreVal = JSON.parse(scoreStr);
    score.computer = scoreVal.computer;
    score.user = scoreVal.user;
    score.tie = scoreVal.tie;
    score.updateScore();
  }
}
function resetScore() {
  score.computer = 0;
  score.user = 0;
  score.tie = 0;
  score.updateScore();
  document.querySelector("#result").innerHTML = "";
}

function createRandomChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  return randomChoice;
}

function computeComputerChoice() {
  let computerChoose = createRandomChoice();
  let computerChooseText;
  if (computerChoose === 1) {
    computerChooseText = `👊🏻Rock`;
  } else if (computerChoose === 2) {
    computerChooseText = `🤚🏻Paper`;
  } else {
    computerChooseText = `✌🏻Scissor`;
  }
  return computerChooseText;
}
function showResult(userChoice, computerchoice, result) {
  document.querySelector("#result").innerHTML = `You choose  ${userChoice}.<br>
       computer choose ${computerchoice}. <br>
       The result is 👑${result}👑`;
}
function whoWin(userChoice, computerChooseText) {
  let result;
  if (computerChooseText === userChoice) {
    result = `It's a Tie`;
    score.tie++;
  } else if (
    (userChoice === "👊🏻Rock" && computerChooseText === "✌🏻Scissor") ||
    (userChoice === "🤚🏻Paper" && computerChooseText === "👊🏻Rock") ||
    (userChoice === "✌🏻Scissor" && computerChooseText === "🤚🏻Paper")
  ) {
    result = `User Win `;
    score.user++;
  } else {
    result = `Computer Won`;
    score.computer++;
  }
  score.updateScore();
  return result;
}
function rockClicked() {
  const user = "👊🏻Rock";
  let computerChooseText = computeComputerChoice();
  let result = whoWin(user, computerChooseText);
  showResult(user, computerChooseText, result);
}
function paperClicked() {
  const user = "🤚🏻Paper";
  let computerChooseText = computeComputerChoice();
  let result = whoWin(user, computerChooseText);
  showResult(user, computerChooseText, result);
}
function scissorClicked() {
  const user = "✌🏻Scissor";
  let computerChooseText = computeComputerChoice();
  let result = whoWin(user, computerChooseText);
  showResult(user, computerChooseText, result);
}
initialize();
