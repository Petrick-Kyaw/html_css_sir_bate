var balance = 1000;
var low = 0;
var high = 100;
var winningRate = 100;
var noLuckyNumberMessage = "!!!Please enter your lucky number!!!";
var overRangeMessage = "!!!Your lucky number must be between 0 and 100!!!";
var noBetAmountMessage ="!!!Please place your bet!!!";
var overBalanceMessage = "!!!Your betting amount is over your balance!!!";
var playAgainMessage = "Please enter the valid value 0 or 1";

function checkLuckyNumber(inpLuckyNumber){
  var luckyNumber;
  var inpLuckyNumber;
  if(!inpLuckyNumber){
    alert(noLuckyNumberMessage);
    inpLuckyNumber = takingLuckyNumber();
    checkLuckyNumber(inpLuckyNumber);
  }else if(inpLuckyNumber < 0 || inpLuckyNumber > 100){
    alert(overRangeMessage);
    inpLuckyNumber = takingLuckyNumber();
    checkLuckyNumber(inpLuckyNumber);
  }else{
    luckyNumber = inpLuckyNumber;
    return luckyNumber;
  }
}
function checkBetAmount(inpBetAmount){
  var betAmount;
  if(!inpBetAmount){
    alert(noBetAmountMessage);
    inpBetAmount = takingBetAmount();
    checkBetAmount(inpBetAmount);
  }else if(inpBetAmount > balance){
    alert(overBalanceMessage);
    inpBetAmount = takingBetAmount();
    checkBetAmount(inpBetAmount);
  }else{
    betAmount = inpBetAmount;
    return betAmount;
  }
}
function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}
function checkWinOrLose(luckyNumber,betAmount,r){
  if( r == luckyNumber){
    balance += betAmount * winningRate;
    alert(`You are the winner,Your balance now is ${balance}`);
    return answer = playAgain();
  }else if( r != luckyNumber){
    balance -= betAmount;
    alert(`Better luck next time,Your balance now is ${balance}`);
    return answer = playAgain();
  }
}
function takingLuckyNumber(){
  var inpLuckyNumber;
  inpLuckyNumber = Number(prompt(`Please choose your lucky number between ${low} and ${high}`));
  return inpLuckyNumber;
}
function takingBetAmount(){
  var inpBetAmount;
  inpBetAmount = Number(prompt('Please place your bet'));
  return inpBetAmount;
}
function showBalance(){
  alert(`Your balance now is ${balance}`);
}
function playAgain(){
  var answer = Number(prompt('1.Play Again \n0.Stop'));
  if(answer == 1 || answer == 0){
    return answer;
  }else{
    alert(playAgainMessage);
    playAgain();
  } 
}
function play(){
  showBalance();
  var inpLuckyNumber = takingLuckyNumber();
  var luckyNumber = checkLuckyNumber(inpLuckyNumber);
  var inpBetAmount = takingBetAmount();
  var betAmount = checkBetAmount(inpBetAmount);
  var r = getRandomNumber();
  var answer = checkWinOrLose(luckyNumber,betAmount,r);
  if(answer == 1){
    play();
  }else{
    return;
  }
}

  play();


