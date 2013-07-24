test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test("Test getOregonWords - data at end", function() {
	var data = getOregonWords(0xFFFFFFF1);
	equal(data[7], 1);
});

test("Test getOregonWords - length", function() {
	var data = getOregonWords(0x12345678);
	equal(data.length, 8);
});

//TODO: test padding e.g. data / that other things have not shifted


test("Test get temperature", function(assert) {
	var reading = OregonReading(0xEA4C209C51274074);
	assert.close(reading.temperature, 27.5, 0.01);
});

test("Test get temperature - negative temperature", function(assert) {
	var reading = OregonReading(0xEA4C209600209833);
	assert.close(reading.temperature, -20, 0.01);
});

test("Test get channel - channel 2", function() {
	var reading = OregonReading(0x020003E80C133245FB);
	equal(reading.channel, 2);
});

test("Test get channel - channel 3", function() {
	var reading = OregonReading(0xEA4C40750822A053);
	equal(reading.channel, 3);
});


