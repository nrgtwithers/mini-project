// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the catFactArray)
	var number = Math.floor((Math.random() * catFactArray.length));
	// We display the fact from the catFactArray that is in the random position we just generated.
	$("#factText").text(catFactArray[number])
})

// This array holds all of our Grumpy Cat facts!
var catFactArray = ["Grumpy was born on April 4, 2012", "Grumpy's unique look comes from feline dwarfism and an underbite", "Grumpy has a brother named Pokey", "Her favorite Friskies food is Savory Shreds"]
