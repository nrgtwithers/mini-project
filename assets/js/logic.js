// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 19 (the number of facts in the booFacts array)
	var number = Math.floor((Math.random() * booFacts.length));
	// We display the fact from the booFacts array that is in the random position we just generated.
	$("#factText").text(booFacts[number])
})

// This array holds all of our Boo facts!
// Magic 8 Ball Responses retrieved from https://en.wikipedia.org/wiki/Magic_8-Ball 
var booFacts = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful." ]