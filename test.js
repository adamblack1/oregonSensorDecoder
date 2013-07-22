

test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test ("Test getOregonWords - length", function() {
	var data = getOregonWords(0x12345678);
	equal(data.length, 16);
});

test ("Test getOregonWords - data at end", function() {
	var data = getOregonWords(0xFFFFFFF1);
	equal(data[15], 1);
});

