var isDate = function (input) {
  //   write your code here
	
  return input instanceof Date && !isNaN(input)


};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
