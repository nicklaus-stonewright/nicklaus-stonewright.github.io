function FizzBuzz() {
    let score = 0;
    let fizz_number = 3
    let buzz_number = 5
    let number = 0;
    let running = false;
    let choices = ['Pass', 'Fizz', 'Buzz', 'FizzBuzz'];
    let player_guess = 0;
    let correct_choice = 0;
   
    // start and setup functions
    this.start = function () {
        number = 1;
        score = 0;
        running = true;
        this.updateDisplay();
        this.updateConditions();
    }
    
    this.updateDisplay = function () {
        document.getElementById("number_display").innerHTML = "What about: " + number;
        document.getElementById("score_display").innerHTML = "your score is: " + score;
    }
    
    this.updateConditions = function () {
        is_Fizz = (number % fizz_number == 0) || false
        is_Buzz = (number % buzz_number == 0) || false
        is_FizzBuzz = (is_Fizz && is_Buzz) || false
        is_Pass = (!is_Fizz && !is_Buzz) || false
        if (is_Pass) correct_choice = 0;
        if (is_Fizz) correct_choice = 1;
        if (is_Buzz) correct_choice = 2;
        if (is_FizzBuzz) correct_choice = 3;
        
    }
    
    this.checkIfRunning = function () {
        if (!running) {
            document.getElementById("score_display").innerHTML = "Please click on start game button first";
            document.getElementById("previous_number_display").className += " bg-info";
        }
        else return true;
    }

    //button functions   
    this.fizzButton = function () {
        if (this.checkIfRunning()) {
            player_guess = 1;
            this.checkPlayerChoice();
            this.incrementNumber();
        }
    }

    this.buzzButton = function () {
        if (this.checkIfRunning()) {
            player_guess = 2;
            this.checkPlayerChoice();
            this.incrementNumber();
        }
    }

    this.fizzBuzzButton = function () {
        if (this.checkIfRunning()) {
            player_guess = 3;
            this.checkPlayerChoice();
            this.incrementNumber();
        }
    }

    this.passButton = function () {
        this.checkIfRunning();
        if (running) {
            player_guess = 0;
            // this.checkPlayerChoice();
            this.incrementNumber();
        }
    }

    //Scoring functions
    this.checkPlayerChoice = function () {
        if (correct_choice == 3 && player_guess == correct_choice) {
            score += 2;
            this.correctChoiceColour();
        }
        else if (player_guess == correct_choice) {
            score += 1;
            this.correctChoiceColour();
        }
        else if (player_guess !== correct_choice) {
            this.wrongChoiceColour();
        }
    }

    this.correctChoiceColour = function () {
        document.getElementById("previous_number_display").style = "background-color:MediumSeaGreen;";
    }

    this.wrongChoiceColour = function () {
        document.getElementById("previous_number_display").style = "background-color:Tomato;";
    }

    this.previousNumber = function () {
        if (!is_Fizz && !is_Buzz) {
            document.getElementById("previous_number_display")
                .innerHTML = number + " was <b>not divisible by either " + fizz_number + " or " + buzz_number + "</b>";
        }
        if (is_Fizz) {
            document.getElementById("previous_number_display")
                .innerHTML = number + " was <b>divisible by " + fizz_number + "</b>";
        }
        if (is_Buzz) {
            document.getElementById("previous_number_display")
                .innerHTML = number + " was <b>divisible by " + buzz_number + "</b>";
        }
        if (is_FizzBuzz) {
            document.getElementById("previous_number_display")
                .innerHTML = number + " was <b>divisible by " + fizz_number + " and " + buzz_number + "</b>";
        }
    }

    this.incrementNumber = function () {
        this.previousNumber();
        number += 1;
        this.updateConditions();
        this.updateDisplay();
    }

}

const game = new Fizzbuzz;