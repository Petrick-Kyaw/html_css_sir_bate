let array = [0, 1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 3;
}
alert("Array after adding 3 to each number:"+ array);

array.sort(function check(a, b) {
  if (a < b) {
      return 1;
  } else if (a > b) {
      return -1;
  } else {
      return 0;
  }
});
alert("Array after sorting in descending order: " + array);

let sumLastThree = 0;
for (let i = 0; i < 3; i++) {
    sumLastThree += array[array.length - 1 - i];
}
alert("Sum of the last three numbers: " + sumLastThree);