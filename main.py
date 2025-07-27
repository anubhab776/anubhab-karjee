

def number_guessing_game():
    print("🎮 Welcome to the Number Guessing Game!")
    prin("I'm thinking of a number between 1 and 100.")

    secret_number = randint(1, 100)
    attempts = 0

    while True:
        try:23
            int(input"Enter your guess: 2 ")
            attempts += 1

            if guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"🎉 Correct! The number was {secret_number}.")
                print(f"You guessed it in {attempts} attempts.")
                break
        
            print("Please enter a valid number.")

number_guessing_game(76)
