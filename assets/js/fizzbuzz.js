
//Timer object








//Fizz Buzz object
function FizzBuzz() {
    let timerDuration = 5;
    let timerDisplay = document.getElementById("timer_display");
    let score = 0;
    let fizz_number = 3
    let buzz_number = 5
    let number = 0;
    let running = false;
    let choices = ['Pass', 'Fizz', 'Buzz', 'FizzBuzz'];
    let player_guess = 0;
    let correct_choice = 0;

    this.startTimer = function (duration, display) {
        var timer = duration, minutes, seconds;
        
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.innerHTML = minutes + ":" + seconds;

            if (--timer < 0) {
                display.innerHTML = `your score is ${score}`;
            }
        }, 1000);
    }

    this.Timer = function () {
        this.startTimer(timerDuration, timerDisplay)
    }

    this.scream = function () {
        console.log('Aaaaaaa');
    }

    // start and setup functions
    this.start = function () {
        number = 1;
        score = 0;
        running = true;
        this.Timer();
        this.updateDisplay();
        this.updateConditions();
        this.clearWarningMessage();
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
            document.getElementById("warningMessage").innerHTML = "Please click on start game button first";
            document.getElementById("warningMessage").className += " bg-danger";
        }
        else return true;
    }

    this.clearWarningMessage = function () {
        document.getElementById("warningMessage").innerHTML = "";
        document.getElementById("warningMessage").className = "";
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
            this.checkPlayerChoice();
            this.incrementNumber();
        }
    }

    //Scoring functions
    this.checkPlayerChoice = function () {
        if (correct_choice == 3 && player_guess == correct_choice) {
            document.getElementById("previous_number_feedback").innerHTML = "Correct!";
            score += 2;
            this.correctChoiceColour();
        }
        else if (player_guess == correct_choice) {
            document.getElementById("previous_number_feedback").innerHTML = "Correct!";
            score += 1;
            this.correctChoiceColour();
        }
        else if (player_guess !== correct_choice) {
            document.getElementById("previous_number_feedback").innerHTML = "Wrong!";
            this.wrongChoiceColour();
        }
    }

    this.correctChoiceColour = function () {
        document.getElementById("previous_number_feedback").style = "background-color:MediumSeaGreen;";
    }

    this.wrongChoiceColour = function () {
        document.getElementById("previous_number_feedback").style = "background-color:Tomato;";
    }

    this.previousNumber = function () {
        // console.log('Correct Choice was', choices[correct_choice]);
        if (!is_Fizz && !is_Buzz) {
            document.getElementById("previous_number_display")
                .innerHTML = number + " was not divisible by either " + fizz_number + " or " + buzz_number;
        }
        if (is_FizzBuzz) {
            document.getElementById("previous_number_display")
                .innerHTML = number + " was divisible by " + fizz_number + " and " + buzz_number;
        }
        if (is_Fizz) {
            document.getElementById("previous_number_display")
                .innerHTML = number + " was divisible by " + fizz_number;
        }
        if (is_Buzz) {
            document.getElementById("previous_number_display")
                .innerHTML = number + " was divisible by " + buzz_number;
        }
    }

    this.incrementNumber = function () {
        this.previousNumber();
        number = Math.floor(Math.random() * 150);
        this.updateConditions();
        this.updateDisplay();
    }

}

const game = new FizzBuzz;
