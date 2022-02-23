function Fizzbuzz() {
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
        this.updatedisplay();
        this.updateconditions();
    }
    
    this.updatedisplay = function () {
        document.getElementById("number_display").innerHTML = "What about: " + number;
        document.getElementById("score_display").innerHTML = "your score is: " + score;
    }
    
    this.updateconditions = function () {
        is_Fizz = (number % fizz_number == 0) || false
        is_Buzz = (number % buzz_number == 0) || false
        is_FizzBuzz = (is_Fizz && is_Buzz) || false
        is_Pass = (!is_Fizz && !is_Buzz) || false
        if (is_Pass) correct_choice = 0;
        if (is_Fizz) correct_choice = 1;
        if (is_Buzz) correct_choice = 2;
        if (is_FizzBuzz) correct_choice = 3;
        
    }
    
    this.checkifrunning = function () {
        if (!running) {
            document.getElementById("score_display").innerHTML = "Please click on start game button first";
            document.getElementById("previous_number_display").className += " bg-info";
        }
        else return true;
    }

    //button functions   
    this.fizzbutton = function () {
        if (this.checkifrunning()) {
            player_guess = 1;
            this.checkplayerchoice();
            this.incrementnumber();
        }
    }

    this.buzzbutton = function () {
        if (this.checkifrunning()) {
            player_guess = 2;
            this.checkplayerchoice();
            this.incrementnumber();
        }
    }

    this.fizzbuzzbutton = function () {
        if (this.checkifrunning()) {
            player_guess = 3;
            this.checkplayerchoice();
            this.incrementnumber();
        }
    }

    this.passbutton = function () {
        this.checkifrunning();
        if (running) {
            player_guess = 0;
            this.checkplayerchoice();
            this.incrementnumber();
        }
    }

    //Scoring functions
    this.checkplayerchoice = function () {
        if (correct_choice == 3 && player_guess == correct_choice) {
            score += 2;
            this.correctchoicecolour();
        }
        else if (player_guess == correct_choice) {
            score += 1;
            this.correctchoicecolour();
        }
        else if (player_guess !== correct_choice) {
            this.wrongchoicecolour();
        }
    }

    this.correctchoicecolour = function () {
        document.getElementById("previous_number_display").style = "background-color:MediumSeaGreen;";
    }

    this.wrongchoicecolour = function () {
        document.getElementById("previous_number_display").style = "background-color:Tomato;";
    }

    this.previousnumber = function () {
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

    this.incrementnumber = function () {
        this.previousnumber();
        number += 1;
        this.updateconditions();
        this.updatedisplay();
    }

}

const game = new Fizzbuzz;