
//function createReading // http://www.w3schools.com/js/js_obj_intro.asp

var WORD_SIZE_IN_BITS = 4;
var WORD_SIZE = Math.pow(2, WORD_SIZE_IN_BITS);
var MESSAGE_LENGTH_IN_WORDS = 8;


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
	var tenths = dataAsWords[8];

	return tens * 10 + ones + tenths / 10;
}


function getOregonWords(input) {
	var wordsAsAString = input.toString(WORD_SIZE);
	var wordsAsStrings = wordsAsAString.split("");
	padArrayToExpectedLength(wordsAsStrings);

	var result = getWordsFromStings(wordsAsStrings);
	return result;
}

function padArrayToExpectedLength(array) {
	while (array.length < MESSAGE_LENGTH_IN_WORDS) {
		array.push(0);
	}
}

function getWordsFromStings(input) {
	var result = Array();

	for (var i = 0; i < input.length; i++) {
		var temp = input[i];
		result[i] = parseInt(temp, WORD_SIZE);

		//document.write(i+": "+temp+" -> "+result[i]+"<br />");
	}

	return result;
}
