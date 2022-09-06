const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

});

rl.question("What is your name ? ", (name) =>{
	rl.question("What is your number? ", (number) =>{
		rl.question(`What is your email, ${name}? `, (email) =>{
			console.log(`Thank youu ${name}, and ur number ${number}, ouhh this ur ${email}`);

	rl.close();
		})
	})
})