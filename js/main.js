var userAge = prompt("Welcome to our club. How old are you?")

if(userAge >= 21) {
	document.write("All good. Come on in!");
} else if(userAge >= 18) {
	document.write("You can come in but you can't drink.");
} else {
	document.write("Sorry kid, you're too young.");
}