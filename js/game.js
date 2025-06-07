let amountElement = document.getElementById("amount");
let numbersInputs = document.querySelectorAll('input[type="number"]');
let error = document.getElementById("error");

let popupResults = document.getElementById("popup-results");
let popup = document.getElementById("popup");

//נתוני משתמש
let amount = 1000;
let userNums = [];
let userStrongnum = 0;
let counter = 0;

//נתוני הגרלה
let lottery = [];
let strongNum = 0;

function updateAmount(amount) {
  amountElement.innerText = "Amount :" + amount + "₪";
}

function checkNumbersValues() {
  let flag = true;
  error.innerText = "";
  userNums = [];
  numbersInputs.forEach((input, i) => {
    let value = Number(input.value);
    if (value >= 1 && value <= 37) {
      if (i <= 5 && !userNums.includes(value)) {
        userNums[i] = value;
      } else if (i == 6) {
        if (value >= 1 && value <= 7) {
          userStrongnum = value;
        } else {
          flag = false;
          error.innerText =
            "Strong number must be in the range 1-7. Try again.";
        }
      } else {
        flag = false;
        error.innerText =
          "There are blank or non-existent values in the range 1-37.";
      }
    } else {
      flag = false;
      error.innerText = "There are blank values.";
    }
  });
  if (flag) {
    checkLottery();
    prize();
  }
}

function createLottery() {
  for (let i = 0; i <= 6; i++) {
    i <= 5
      ? lottery.push(getRandomNumber(1, 37))
      : (strongNum = getRandomNumber(1, 7));
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLottery() {
  disableInput(true);
  for (let i = 0; i < userNums.length; i++) {
    if (lottery.includes(userNums[i])) {
      changeBackground(i, "green");
      counter++;
    } else {
      changeBackground(i, "red");
    }
  }
  if (strongNum == userStrongnum) {
    changeBackground(6, "green");
  } else {
    changeBackground(6, "red");
  }
}

function changeBackground(index, color) {
  numbersInputs[index].style.backgroundColor = color;
  setTimeout(() => {
    numbersInputs[index].style.backgroundColor = "white";
    prizeForm();
  }, 4000);
}

function prize() {
  let prize = 0;
  if (counter == 6 && strongNum == userStrongnum) {
    prize = 1000;
  } else if (counter == 6 && strongNum != userStrongnum) {
    prize = 600;
  } else if (counter == 4 && strongNum == userStrongnum) {
    prize = 400;
  } else {
    prize = 0;
  }
  amount += prize;
  updateAmount(amount);
}

function prizeForm() {
  emptyInputs();
  let endButton = document.createElement("button");
  let tryAgainButton = document.createElement("button");
  let btnsContainer = document.createElement("div");
  btnsContainer.setAttribute("class", "btns");
  endButton.setAttribute("class", "btn");
  tryAgainButton.setAttribute("class", "btn");
  tryAgainButton.setAttribute("id", "tryAgain");
  tryAgainButton.innerText = "TRY AGAIN";
  endButton.innerText = "END";

  let lotteryNumbers = "";
  let userNumbers = "";

  popupResults.style.display = "flex";
  lottery.forEach((num) => (lotteryNumbers += num + " "));
  userNums.forEach((num) => (userNumbers += num + " "));

  popup.innerHTML =
    "<p>" +
    "<p class='lottery-results'>Lottery results:</p>" +
    "The strong number is: " +
    strongNum +
    "<br/>" +
    "Six numbers: " +
    lotteryNumbers +
    "</p>" +
    "<p>" +
    "<p class='lottery-results'>Your choices:</p>" +
    "The strong number is: " +
    userStrongnum +
    "<br/>" +
    "Six numbers: " +
    userNumbers +
    "<br/>" +
    "<br/>" +
    "You guessed " +
    "<mark> " +
    counter +
    "</mark>" +
    " numbers";
  ("</p>");

  endButton.addEventListener("click", endGame);
  btnsContainer.appendChild(endButton);
  btnsContainer.appendChild(tryAgainButton);
  popup.appendChild(btnsContainer);
  if (amount < 300) {
    document.getElementById("tryAgain").disabled = true;
  } else {
    disableInput(false);
    tryAgainButton.addEventListener("click", tryAgainGame);
  }
}

function initializeForm() {
  userNums = [];
  userStrongnum = 0;
  counter = 0;
  lottery = [];
  strongNum = 0;
}

function startGame() {
  amount -= 300;
  updateAmount(amount);
  initializeForm();
  createLottery();
}

function endGame() {
  popup.innerHTML =
    "<p> GAME OVER </p>" +
    "<br/>" +
    "<p class='lottery-results'>Your final amount is " +
    amount +
    "</p>";
  setTimeout(() => {
    window.location.href = "../pages/index.html";
  }, 5000);
}

function disableInput(boolean) {
  numbersInputs.forEach((input) => (input.disabled = boolean));
}

function tryAgainGame() {
  popupResults.style.display = "none";
  startGame();
}

function emptyInputs() {
  numbersInputs.forEach((input) => (input.value = ""));
}

startGame();
