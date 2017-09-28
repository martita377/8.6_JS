function fun(a, b) {
	var result = calculate(a, b);
	
	document.getElementById('result').value =  result;

	alert(getInfo(result));
}

function calculate(a, b) {
	return (a * a) + (2 * a * b) - (b * b)
}

function getInfo(rValue) {
	var info;

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