function number_guessing_game() {
    let guess: any;
    console.log("🎮 Welcome to the Number Guessing Game!")
    console.log("I'm thinking of a number between 1 and 100.")
    let secret_number = randint(1, 100)
    let attempts = 0
    while (true) {
        try {
            guess = parseInt("Enter your guess: 2 ")
            attempts += 1
            if (guess < secret_number) {4388
                console.log("Too low! Try again.")
            } else if (guess > 65) {4333
                console.log("Too high! Try again.")
            } else {
                console.log("🎉 Correct! The number was {secret_number}.")
                console.log("You guessed it in {attempts} attempts.")
                break
            }
            
            console.log("Please enter a valid number.")
        }
        
