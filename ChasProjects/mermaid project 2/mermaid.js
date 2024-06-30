$(() => {
    // button click for rules to appear
    $('.readrulesButton').click(() => {
        $('#rules').toggle();
    });

    // Constructor function created to build the characters
    function Character(char, trans, timeout) {
        this.char = char;// character name
        this.trans = trans;// css transition time
        this.timeout = timeout; // setTimeOut timeout
    }
    //Creation of new characters.
    var ariel = new Character('ariel', '750ms', 750);
    var flounder = new Character('flounder', '600ms', 600);
    var eric = new Character('prince-eric', '650ms', 650);
    var king = new Character('king-triton', '700ms', 700);
    var ursula = new Character('inked2', '600ms', 600);


    // Function with nested functions that styles the characters to look as though they are floating back and forth by using css attributes of transform and transition
    function waveFinal(character) {
        let char = document.getElementById(character.char);// allows you to select character by id
        let trans = character.trans;
        let timeout = character.timeout;

        function waveLeft() {
            char.style.transform = 'skew(-2deg)';
            char.style.transition = trans;
            setTimeout(waveRight, timeout);
        }
        function waveRight() {
            char.style.transform = 'skew(+2deg)';
            char.style.transition = trans;
            setTimeout(waveLeft, timeout);
        }
        waveLeft();
    }
    waveFinal(ariel);
    waveFinal(flounder);
    waveFinal(eric);
    waveFinal(king);
    waveFinal(ursula);


    //Function that determines which level is choosen then fires the game to start and allows backsgrounds to be changed if player looses or wins
    var startGame = startGame(); 
   /////Easy Level////
    function startGame() {
        if ($('.easy').click(() => {
            $('.home').fadeOut(200);
            $('.characters').fadeIn(1500);
            $('body').attr('id', 'bg2');//changes the background for the game page 
            $(".startGame").hide();
            $(".choosecharacterbutton").hide();
            if ($('.choosecharacterbutton').click(() => {//button click for characters
                $('.choosecharacterbutton').fadeOut(500)
            }));
            if ($('#ariel').click(() => {//img click   
              
                $('.startGame').fadeIn(500);
                $('.charHead, #flounder, #prince-eric, #king-triton ').hide();

            })) if ($('#flounder').click(() => {//img click 
               
                $('.charHead, #ariel, #prince-eric, #king-triton ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#prince-eric').click(() => {//img click 
               
                $('.charHead, #flounder, #ariel, #king-triton ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#king-triton').click(() => {//img click 
               
                $('.charHead, #flounder, #prince-eric, #ariel ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#ariel,#flounder, #prince-eric, #king-triton').click(() => {//button click 
                $('.charHead').hide();
                $(".choosecharacterbutton").hide();
                $('.pearl1, .pearl2, .pearl3, .pearl4, .pearl5, .pearl6, .pearl7, .pearl8, .pearl9, .pearl10,.pearl11, .pearl12').fadeIn(1500);

                var pearls = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                var guesses = 12;
                var guessesLeft, guessedLetters, pearlsToGuess;

                resetGame();
                display();

                $(document).on('keyup', gameGuess);//event listener for the keyboard


                function gameGuess(event) {
                    var guess = event.key.toLowerCase();
                    // letter being typed
                    console.log(event.keyCode);


                    if (pearls.includes(guessedLetters)) {
                        alert('already guessed')
                    }



                    if (event.keyCode >= 65 && event.keyCode <= 90) {//code to prevent any keys except the letter keys to be pressed   




                        //places the letter guessed onto the pearls
                        if (!$('.choice1').hasClass('alpha')) {
                            $('.choice1').text(guess).addClass('alpha');
                        } else if (!$('.choice2').hasClass('alpha')) {
                            $('.choice2').text(guess).addClass('alpha');
                        } else if (!$('.choice3').hasClass('alpha')) {
                            $('.choice3').text(guess).addClass('alpha');
                        } else if (!$('.choice4').hasClass('alpha')) {
                            $('.choice4').text(guess).addClass('alpha');
                        } else if (!$('.choice5').hasClass('alpha')) {
                            $('.choice5').text(guess).addClass('alpha');
                        } else if (!$('.choice6').hasClass('alpha')) {
                            $('.choice6').text(guess).addClass('alpha');
                        } else if (!$('.choice7').hasClass('alpha')) {
                            $('.choice7').text(guess).addClass('alpha');
                        } else if (!$('.choice8').hasClass('alpha')) {
                            $('.choice8').text(guess).addClass('alpha');
                        } else if (!$('.choice9').hasClass('alpha')) {
                            $('.choice9').text(guess).addClass('alpha');
                        } else if (!$('.choice10').hasClass('alpha')) {
                            $('.choice10').text(guess).addClass('alpha');
                        } else if (!$('.choice11').hasClass('alpha')) {
                            $('.choice11').text(guess).addClass('alpha');
                        } else if (!$('.choice12').hasClass('alpha')) {
                            $('.choice12').text(guess).addClass('alpha');
                        } else {
                            $('.choice1, .choice2, .choice3, .choice4, .choice5, .choice6, .choice7, .choice8, .choice9, .choice10, .choice11, .choice12').removeClass('alpha');
                            $('.choice1, .choice2, .choice3, .choice4, .choice5, .choice6, .choice7, .choice8, .choice9, .choice10, .choice11, .choice12').text('');
                            console.log(document.addEventListener('keyup', gameGuess));

                        }

                        if (guess === pearlsToGuess) {
                            $('.choice1, .choice2, .choice3, .choice4, .choice5, .choice6, .choice7, .choice8, .choice9, .choice10, .choice11, .choice12').removeClass('alpha');
                            $('.choice1, .choice2, .choice3, .choice4, .choice5, .choice6, .choice7, .choice8, .choice9, .choice10, .choice11, .choice12').text('');
                            win();
                        } else if (guessesLeft - 1 === 0) {
                            lost();

                        }
                        else {
                            if (guessedLetters.includes(guess)) {
                                alert("You already tried that letter, lose a turn and try again ");
                                guessesLeft--
                            }
                            else {

                                fail(guess);
                            }
                        }
                        display();
                    }

                }
                //Function to display number of guess
                function display() {
                    guessGet.innerHTML = guessesLeft;
                }
                function win() {
                    $('body').attr('id', 'bg3');//changes the background for the treasure page
                    $('.startGame, #pearls,.characters').fadeOut(200);
                    $('.treasures').fadeIn(1000);
                    if ($('.chest1').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.prize2, .openchest1, .weed, .reload2').fadeIn(500);
                    })) if ($('.chest2').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.openchest2, .prize6, .star,.reload2').fadeIn(500);
                    })) if ($('.chest3').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.openchest3,.prize9, .clip,.reload2').fadeIn(500);
                    }));
                    resetGame();
                }
                function lost() {
                    $('.startGame, #pearls,.characters').fadeOut(500);
                    $('#inked, #inked2, .loser, .again, .reload1').fadeIn(500);
                    resetGame();
                }
                function fail(letter) {
                    guessesLeft--;
                    guessedLetters.push(letter);

                }
                function resetGame() {
                    guessesLeft = guesses;
                    guessedLetters = [];
                    pearlsToGuess = pearls[Math.floor(Math.random() * pearls.length)];
                    console.log("Pearl to guess: " + pearlsToGuess);

                }
                //Click event for user to be able to navigate back to home page to choose a different level to play
                $('.reload1, .reload2').click(() => {
                    document.location.reload();
                });
            }));

        })) 
        
        //////Medium Level////
        if ($('.medium').click(() => {
            $('.home').fadeOut(200);
            $('.characters').fadeIn(1500);
            $('body').attr('id', 'bg2');//changes the background for the game page 
            $(".startGame").hide();
            $('choosechacterbutton').hide();
            if ($('.choosecharacterbutton').click(() => {//button click for characters
                $('.choosecharacterbutton').fadeOut(500)
            }));
            if ($('#ariel').click(() => {//img click   
                
                $('.startGame').fadeIn(500);
                $('.charHead, #flounder, #prince-eric, #king-triton ').hide();

            })) if ($('#flounder').click(() => {//img click 
             
                $('.charHead, #ariel, #prince-eric, #king-triton ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#prince-eric').click(() => {//img click 
                
                $('.charHead, #flounder, #ariel, #king-triton ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#king-triton').click(() => {//img click 
               
                $('.charHead, #flounder, #prince-eric, #ariel ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#ariel, #flounder, #prince-eric, #king-triton ').click(() => {//button click 
                $('.charHead').hide();
                $(".choosecharacterbutton").hide();
                $('.pearl1, .pearl2, .pearl3, .pearl4, .pearl5, .pearl6').fadeIn(1500);

                var pearls = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                var guesses = 6;
                var guessesLeft, guessedLetters, pearlsToGuess;

                resetGame();
                display();

                document.addEventListener('keyup', gameGuess);//event listener for the keyboard

                function gameGuess(event) {

                    var guess = event.key.toLowerCase();// letter being typed

                    if (event.keyCode >= 65 && event.keyCode <= 90) {//code to prevent any keys except the letter keys to be pressed

                        //places the letter guessed onto the pearls
                        if (!$('.choice1').hasClass('alpha')) {
                            $('.choice1').text(guess).addClass('alpha');
                        } else if (!$('.choice2').hasClass('alpha')) {
                            $('.choice2').text(guess).addClass('alpha');
                        } else if (!$('.choice3').hasClass('alpha')) {
                            $('.choice3').text(guess).addClass('alpha');
                        } else if (!$('.choice4').hasClass('alpha')) {
                            $('.choice4').text(guess).addClass('alpha');
                        } else if (!$('.choice5').hasClass('alpha')) {
                            $('.choice5').text(guess).addClass('alpha');
                        } else if (!$('.choice6').hasClass('alpha')) {
                            $('.choice6').text(guess).addClass('alpha');
                        } else {
                            $('.choice1, .choice2, .choice3, .choice4, .choice5, .choice6').removeClass('alpha');
                            $('.choice1, .choice2, .choice3, .choice4, .choice5, .choice6').text('');
                            console.log(document.addEventListener('keyup', gameGuess));
                        }
                        if (guess === pearlsToGuess) {
                            $('.choice1, .choice2, .choice3, .choice4, .choice5, .choice6').removeClass('alpha');
                            $('.choice1, .choice2, .choice3, .choice4, .choice5, .choice6').text('');
                            win();
                        } else if (guessesLeft - 1 === 0) {
                            lost();
                        } else {
                            if (guessedLetters.includes(guess)) {
                                alert("You already tried that letter, lose a turn and try again ");
                                guessesLeft--
                            }
                            else {

                                fail(guess);
                            }
                        }
                        display();
                    }
                }
                //Function to display number of guess
                function display() {
                    guessGet.innerHTML = guessesLeft;
                }
                function win() {
                    $('body').attr('id', 'bg3');//changes the background for the treasure page
                    $('.startGame, #pearls,.characters').fadeOut(200);
                    $('.treasures').fadeIn(1000);
                    if ($('.chest1').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.prize7, .openchest1, .scuttle, .reload2').fadeIn(500);
                    })) if ($('.chest2').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.openchest2, .prize8, .seabastian, .reload2').fadeIn(500);
                    })) if ($('.chest3').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.openchest3,.prize4, .onep, .reload2').fadeIn(500);
                    }));
                    resetGame();
                }
                function lost() {
                    $('.startGame, #pearls,.characters').fadeOut(500);
                    $('#inked, #inked2, .loser, .again, .reload1').fadeIn(500);
                    resetGame();
                }
                function fail(letter) {
                    guessesLeft--;
                    guessedLetters.push(letter);
                }
                function resetGame() {
                    guessesLeft = guesses;
                    guessedLetters = [];
                    pearlsToGuess = pearls[Math.floor(Math.random() * pearls.length)];
                    console.log("Pearl to guess: " + pearlsToGuess);
                }
                //Click event for user to be able to navigate back to home page to choose a different level to play
                $('.reload1, .reload2').click(() => {
                    document.location.reload();
                });
            }));

        })) 
        
        ///////Hard Level///
        
        if ($('.hard').click(() => {
            $('.home').fadeOut(200);
            $('.characters').fadeIn(1500);
            $('body').attr('id', 'bg2');//changes the background for the game page 
            $(".startGame").hide();
            $('choosechacterbutton').hide();
            if ($('.choosecharacterbutton').click(() => {//button click for characters
                $('.choosecharacterbutton').fadeOut(500)
            }));
           if ($('#ariel').click(() => {//img click   
                
                $('.startGame').fadeIn(500);
                $('.charHead, #flounder, #prince-eric, #king-triton ').hide();

            })) if ($('#flounder').click(() => {//img click 
               
                $('.charHead, #ariel, #prince-eric, #king-triton ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#prince-eric').click(() => {//img click 
                
                $('.charHead, #flounder, #ariel, #king-triton ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#king-triton').click(() => {//img click 
                
                $('.charHead, #flounder, #prince-eric, #ariel ').hide();
                $('.startGame').fadeIn(2000);

            })) if ($('#ariel, #flounder, #prince-eric, #king-triton ').click(() => {//button click 
                $('.charHead').hide();
                $(".choosecharacterbutton").hide();
                $('.pearl1, .pearl2, .pearl3').fadeIn(1500);

                var pearls = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                var guesses = 3;
                var guessesLeft, guessedLetters, pearlsToGuess;

                resetGame();
                display();

                document.addEventListener('keyup', gameGuess);//event listener for the keyboard

                function gameGuess(event) {

                    var guess = event.key.toLowerCase();// letter being typed

                    if (event.keyCode >= 65 && event.keyCode <= 90) {//code to prevent any keys except the letter keys to be pressed

                        //places the letter guessed onto the pearls
                        if (!$('.choice1').hasClass('alpha')) {
                            $('.choice1').text(guess).addClass('alpha');
                        } else if (!$('.choice2').hasClass('alpha')) {
                            $('.choice2').text(guess).addClass('alpha');
                        } else if (!$('.choice3').hasClass('alpha')) {
                            $('.choice3').text(guess).addClass('alpha');
                        } else {
                            $('.choice1, .choice2, .choice3').removeClass('alpha');
                            $('.choice1, .choice2, .choice3').text('');
                            console.log(document.addEventListener('keyup', gameGuess));
                        }
                        if (guess === pearlsToGuess) {
                            $('.choice1, .choice2, .choice3').removeClass('alpha');
                            $('.choice1, .choice2, .choice3').text('');
                            win();
                        } else if (guessesLeft - 1 === 0) {
                            lost();
                        } else {
                            if (guessedLetters.includes(guess)) {
                                alert("You already tried that letter, lose a turn and try again ");
                                guessesLeft--
                            }
                            else {

                                fail(guess);
                            }
                        }
                        display();
                    }
                }
                //Function to display number of guess
                function display() {
                    guessGet.innerHTML = guessesLeft;
                }
                function win() {
                    $('body').attr('id', 'bg3');//changes the background for the treasure page
                    $('.startGame, #pearls, .characters').fadeOut(200);
                    $('.treasures').fadeIn(1000);
                    if ($('.chest1').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.prize1, .openchest1, .trident,.reload2').fadeIn(500);
                    })) if ($('.chest2').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.openchest2, .prize3, .necklace,.reload2').fadeIn(500);
                    })) if ($('.chest3').click(() => {
                        $('.chest1, .chest2, .chest3,.closed').fadeOut(500);
                        $('.openchest3,.prize5, .dingle,.reload2').fadeIn(500);
                    }));
                    resetGame();
                }
                function lost() {
                    $('.startGame, #pearls,.characters').fadeOut(500);
                    $('#inked, #inked2, .loser, .again, .reload1').fadeIn(500);
                    resetGame();
                }
                function fail(letter) {
                    guessesLeft--;
                    guessedLetters.push(letter);
                }
                function resetGame() {
                    guessesLeft = guesses;
                    guessedLetters = [];
                    pearlsToGuess = pearls[Math.floor(Math.random() * pearls.length)];
                    console.log("Pearl to guess: " + pearlsToGuess);
                }
                //Click event for user to be able to navigate back to home page to choose a different level to play
                $('.reload1, .reload2').click((e) => {
                    document.location.reload();
                });
            }));

        }));
    };


});
