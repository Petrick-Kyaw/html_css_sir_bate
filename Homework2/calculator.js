var firstNum;
var secondNum;
var val;
var result;
firstNum = Number(prompt('Enter first value: '));
secondNum = Number(prompt('Enter second value: '));
val = Number(prompt('Enter 1 for addition \nEnter 2 for subtraction \nEnter 3 for multiplication \nEnter 4 for division'));
switch(val){
  case 1:
    result = firstNum + secondNum;
    alert("Result is " + result);
    break;
  case 2:
    result = firstNum - secondNum;
    alert("Result is " + result);
    break;
  case 3:
    result = firstNum * secondNum;
    alert("Result is " + result);
    break;
  case 4:
    result = firstNum / secondNum;
    alert("Result is " + result);
    break;
  default:
    alert("!!!Please select valid arithmetic value!!!");
}
  