
var lastFocusedTextarea = 'leftScreen';
function lastActiveTextArea(fieldId) {
	console.log('Focus changed');
	lastFocusedTextarea = fieldId;
	insertValue(document.getElementById(fieldId), '0')
}
function runConvert(fromElement) {
	console.log("runConvert " + fromElement);
	var activeElement = document.getElementById(fromElement);
	if (lastFocusedTextarea == "leftScreen") {
		insertValue(document.getElementById("rightScreen"),
				parseFloat(activeElement.innerHTML) * localStorage.getItem("currency"));
	} else {
		insertValue(document.getElementById("leftScreen"),
				parseFloat(activeElement.innerHTML) * localStorage.getItem("currency"));
	}
}

function insertValue(element, value) {
	var str = value.toString();
	console.log('insertValue : ' + str);
	if ('.' == str.slice(str.length - 1, str.length)) {
		console.log('i see .dot people');
		element.innerHTML = str;
	} else {
		element.innerHTML = parseFloat(new Number(str).toFixed(2));
	}
}

function removeLastNumber(value) {
	console.log("removeLastNumber " + value);
	return value.slice(0, value.length - 1);
}

function updateScreen(value) {
	console.log("updateScreen " + lastFocusedTextarea)
	var activeElement = document.getElementById(lastFocusedTextarea);
	if (activeElement.innerHTML == 0) {
		insertValue(activeElement, value);
		runConvert(lastFocusedTextarea);
	} else if (value == '<') {
		console.log('last number - retreat!');
		insertValue(activeElement, removeLastNumber(activeElement.innerHTML));
		runConvert(lastFocusedTextarea);
	} else {
		insertValue(activeElement, activeElement.innerHTML + value);
		runConvert(lastFocusedTextarea);
	}
}