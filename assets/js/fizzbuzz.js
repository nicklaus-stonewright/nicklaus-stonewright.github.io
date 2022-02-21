function Fizzbuzz() {
    let score = 0;
    let fizz_number = 3
    let buzz_number = 5
    let number = 0;

    this.start = function () {
        number = 0;
        score = 0;
        this.updatedisplay();
    }

    this.updatedisplay = function () {
        document.getElementById("number_display").innerHTML = "What about: " + number;
        document.getElementById("score_display").innerHTML = "your score is: " + score;
    }

    this.updatescore = function () {
        document.getElementById("score_display").innerHTML += score;
    }

    this.fizzbutton = function () {
        if (number % fizz_number == 0) {
            score += 1;
        }
        this.incrementnumber();
    }

    this.buzzbutton = function () {
        if (number % buzz_number == 0) {
            score += 1;
        }
        this.incrementnumber();
    }

    this.fizzbuzzbutton = function () {
        if (number % fizz_number == 0 && number % buzz_number == 0) {
            score += 1;
        }
        this.incrementnumber();
    }

    this.passbutton = function () {
        this.incrementnumber();
    }

    this.incrementnumber = function () {
        number += 1;
        this.updatedisplay();
    }

}

const game = new Fizzbuzz;