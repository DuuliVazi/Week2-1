function countdownTimer() {
    var timer = 50;

    //start at 50 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 0000);


    //change to 45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 5000);

    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 10000);

    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 15000);

    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 20000);

    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 25000);

    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 30000);

    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 35000);

    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 40000);

    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 45000);

    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "Blastoff!";
        timer = timer - 5;
    }, 50000);

    setTimeout(function() {
        document.getElementById('myimage').style.display = 'block';
    }, 50000);
}

function ranNumGen() {
    var numb = Math.ceil(Math.random()*7);
    document.getElementById("RndNum").innerHTML = numb;

}

//play craps function from Building Blocks Assignment
function play() {
    //create a die1 variable and assigns 1-6
    var die1 = Math.ceil(Math.random() * 6);

    //create a die2 variable and assigns 1-6
    var die2 = Math.ceil(Math.random() * 6);


    //this adds up the dice values of each one 
    var sum = die1 + die2
    //printing out die1 results
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + die1;
    //printing out die2 results
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + die2;
    //printing out die1 results
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;
    
    //sum of dice not equal to 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "Craps you lose!";
    }
    //dice 1 is equal to dice2 and they're even
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    }
    //neither equal to 7 or 11
    else {
        document.getElementById("finalRes").innerHTML = "push, please try again";
    }
    

}