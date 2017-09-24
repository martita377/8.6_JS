var a = 1,
	b = 1,
	rValue = 2,
	info = 'The result is positive';

function fun() {
	a = document.getElementById('aValue').value;
	b = document.getElementById('bValue').value;
	rValue = (a * a) + (2 * a * b) - (b * b);
	document.getElementById('result').value = rValue;

	if (rValue > 0) {
		info = 'The result is positive';
		alert(info);
	} else if (rValue < 0) {
		info = 'The result is negative';
		alert(info);
	} else if (rValue == 0) {
		info = 'The result is zero';
		alert(info);
	} else {
		info = 'Incorrect variable values - type again';
		alert(info);
	}
}

console.log('The result with variable a =' + a + ' and b = ' + b + ' is ' + rValue + ', ' + info);