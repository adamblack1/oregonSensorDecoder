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