
//function createReading // http://www.w3schools.com/js/js_obj_intro.asp

var WORD_SIZE_IN_BITS = 8;
var MESSAGE_LENGTH_IN_WORDS = 16;


function OregonReading(rawData) {
	var reading = new Object();

	var dataAsWords = getOregonWords(rawData);
	reading.temperature = getOregonTemperature(dataAsWords);

	return reading;
}

//TODO: add support for handling negative temperatures
function getOregonTemperature(dataAsWords) {
	var tens = dataAsWords[10];
	var ones = dataAsWords[11];
	var tenths = dataAsWords[13];

	alert("tens are "+tens);
	return tens * 10 + ones + tenths / 10;
}


function getOregonWords(input) {
	var wordsAsAString = input.toString(WORD_SIZE_IN_BITS);
	var result = wordsAsAString.split("");
	padArrayToExpectedLength(result);

	return result;
}

function padArrayToExpectedLength(array) {
	while (array.length < MESSAGE_LENGTH_IN_WORDS) {
		array.push(0);
	}
}