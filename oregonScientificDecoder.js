var WORD_SIZE_IN_BITS = 4;
var WORD_SIZE = Math.pow(2, WORD_SIZE_IN_BITS);
var MESSAGE_LENGTH_IN_WORDS = 8;


function OregonReading(rawData) {
	var reading = new Object();

	var dataAsWords = getOregonWords(rawData);
	reading.temperature = getOregonSensorTemperature(dataAsWords);
	reading.channel = getOregonSensorChannel(dataAsWords);

	return reading;
}

//TODO: add support for handling negative temperatures
function getOregonSensorTemperature(dataAsWords) { //TODO: change this to use string operations... Make locations relative to temperature data in the data..
	var isTemperatureNegative = dataAsWords[13] & 8;
	var tens = dataAsWords[10];
	var ones = dataAsWords[11];
	var tenths = dataAsWords[8];

	var magnitude = tens * 10 + ones + tenths / 10;

	var result;
	if (isTemperatureNegative) {
		result = magnitude * -1;
	} else {
		result = magnitude;
	}

	return result;
}

function getOregonSensorChannel(dataAsWords) {
	var rawValue = dataAsWords[4];
	var asBinaryString = rawValue.toString(2);
	return asBinaryString.length;
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
	}

	return result;
}
