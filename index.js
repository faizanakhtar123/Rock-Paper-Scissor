let score = {
  computer: 0,
  user: 0,
  tie: 0,
};
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
  document.querySelector("#score").innerHTML = `
  score: Computer Won: ${score.computer}, User Won: ${score.user}, Tie: ${score.tie}`;
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
