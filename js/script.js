var info = getInfo(rValue);
var rValue = calculate(a, b);
function fun(a, b) {

	document.getElementById('result').value = rValue;

	getInfo(rValue);
	
	alert(info);
	console.log('The result with variable a =' + a + ' and b = ' + b + ' is ' + rValue + ', ' + info);
}

function calculate(a, b) {
	return (a * a) + (2 * a * b) - (b * b);
}

function getInfo(rValue) {
	if (rValue > 0) {
		info = 'The result is positive';
	} else if (rValue < 0) {
		info = 'The result is negative';
	} else if (rValue == 0) {
		info = 'The result is zero';
	} else {
		info = 'Incorrect variable values - type again';
	}

	return info;
}