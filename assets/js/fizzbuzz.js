function Fizzbuzz() {
    let score = 0;
    let fizz_number = 3
    let buzz_number = 5
    let number = 0;
    let running = false;

    this.start = function () {
        number = 1;
        score = 0;
        running = true;
        this.updatedisplay();
        this.updateconditions();
    }

    this.updateconditions = function () {
        is_Fizz = (number % fizz_number == 0) || false
        is_Buzz = (number % buzz_number == 0) || false
        is_FizzBuzz = (is_Fizz && is_Buzz) || false
    }

    this.updatedisplay = function () {
        document.getElementById("number_display").innerHTML = "What about: " + number;
        document.getElementById("score_display").innerHTML = "your score is: " + score;
    }

    this.checkifrunning = function () {
        if (!running) {
            document.getElementById("score_display").innerHTML = "Please click on start game button first";
        }
    }

    this.fizzbutton = function () {
        this.checkifrunning();
        if (running) {
            if (!is_Buzz || !is_FizzBuzz) {
                if (is_Fizz) {
                    score += 1;
                    document.getElementById("previous_number_display").className += " btn-success";
                }
                this.incrementnumber();
            }
            else if (!is_Fizz) {
                document.getElementById("previous_number_display").className += " btn-danger";

            }
        }
    }

    this.buzzbutton = function () {
        this.checkifrunning();
        if (running) {
            if (is_Buzz) {
                score += 1;
            }
            this.incrementnumber();
        }
    }

    this.fizzbuzzbutton = function () {
        this.checkifrunning();
        if (running) {
            if (is_FizzBuzz) {
                score += 2;
            }
            this.incrementnumber();
        }
    }

    this.passbutton = function () {
        this.checkifrunning();
        if (running) {
            this.incrementnumber();
        }
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