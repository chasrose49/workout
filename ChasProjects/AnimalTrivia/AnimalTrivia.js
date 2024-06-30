//Greeter//

var today = new Date();
var hourNow = today.getHours();

var greeting;

if (hourNow >= 15) {
    greeting = 'Good Evening Player and Good Luck!';
}
else if (hourNow >= 10) {
    greeting = 'Good Afternoon Player and Good Luck!'
}
else if (hourNow < 10) {
    greeting = 'Good Morning Player and Good Luck!';
}

else {
    greeting = 'Hello Player and Good Luck!';
}



$('#jungle').prepend('<p class="container">' + '</p>').prepend(greeting).css({ "font-family": "noteworthy", 'font-size': '2rem' })


//Trivia Questions and Answer object array //



var myQuestions = [

    {
        question: 'The Mountain ReedBuck Antelope warns its <br> fellows when danger is spotted by ',
        answers: {
            a: "Whistling",
            b: "Jumping up and down",
            c: "Barking"
        },
        correctAnswer: "a"
    },

    {
        question: 'Loggerhead Sea Turtles travel _____ miles<br> from breeding to feeding areas',
        answers: {
            a: "20",
            b: "7,500",
            c: "400"
        },
        correctAnswer: "b"
    },


    {
        question: 'A group of Geese on the ground is called a ',
        answers: {
            a: "Club",
            b: "Horde",
            c: 'Gaggle',
        },
        correctAnswer: "c"
    },

    {
        question: 'Elephants can ___ water from miles away ',
        answers: {
            a: "see",
            b: 'hear',
            c: "smell",
        },
        correctAnswer: "c"
    },

    {
        question: 'The Pinyon Jay Bird uses at least<br> ___distinct calls to communicate',
        answers: {
            a: "15",
            b: "7",
            c: '3',
        },
        correctAnswer: "a"
    },

    {
        question: 'The Hog Nose snake will fake their death by',
        answers: {
            a: "turning a different color",
            b: "laying still and closing eyes",
            c: 'secreting a foul smell<br> and spewing blood',
        },
        correctAnswer: "c"
    },

    {
        question: 'An Elephants can hold up to ____ <br>gallons of water in their trunk',
        answers: {
            a: "3",
            b: "30",
            c: '13',
        },
        correctAnswer: "a"
    },

    {
        question: 'Spiders can fly up to 2.8 miles high and<br> for thousands of miles in a process called',
        answers: {
            a: "Balloning",
            b: 'Parachuting',
            c: "Gliding",

        },
        correctAnswer: "a"
    },

    {
        question: 'Toads have percise specifications <br>for where they do what ',
        answers: {
            a: "swim and eat ",
            b: 'breed and leave eggs',
            c: "lounge and sleep",

        },
        correctAnswer: "b"
    },
    {
        question: 'Elephants have ___ times as many<br> olfactory receptors as humans',
        answers: {
            a: "2",
            b: '10',
            c: "5",

        },
        correctAnswer: "c"
    },

    {
        question: 'A group of owls are called a ',
        answers: {
            a: "troop",
            b: 'parliament',
            c: "bustle",

        },
        correctAnswer: "b"
    },

    {
        question: 'The Wallace giant bee has a <br>wing span of up to ',
        answers: {
            a: ".5 inches",
            b: '8 inches',
            c: "2.5 inches",

        },
        correctAnswer: "c"
    },

    {
        question: 'How many main species of giraffes are there ',
        answers: {
            a: "12",
            b: '1',
            c: "4",

        },
        correctAnswer: "c"
    },


    {
        question: 'Giraffes do not jump',
        answers: {
            a: "True",
            b: 'False',


        },
        correctAnswer: "a"
    },

    {
        question: 'Flatback turtles grow up to ',
        answers: {
            a: "7 feet",
            b: '2 feet',
            c: "5 feet",

        },
        correctAnswer: "a"
    },

    {
        question: 'A full grown giraffe heart weighs  ',
        answers: {
            a: "2 pounds",
            b: '24 pounds',
            c: "9 pounds",

        },
        correctAnswer: "b"
    },

    {
        question: 'Northern giraffes do not have spots on their ',
        answers: {
            a: "legs",
            b: 'belly',
            c: "head",

        },
        correctAnswer: "a"
    },

    {

        question: 'Flying squirrels fur glows pink <br> in ultraviolet light',
        answers: {
            a: "True",
            b: "false",

        },
        correctAnswer: "a"
    },

    {

        question: 'There are how many species of baboons',
        answers: {
            a: "5",
            b: "20",
            c: "2"
        },
        correctAnswer: "a"
    },

    {

        question: 'Baboons buttocks are nerveless',
        answers: {
            a: "True",
            b: "false",

        },
        correctAnswer: "a"
    },

    {

        question: 'A group of baboons are referred to as a',
        answers: {
            a: "crowd",
            b: "band",
            c: "troop"
        },
        correctAnswer: "c"
    },

    {

        question: 'Males and female chacma baboons often form <br>relationships referred to as',
        answers: {
            a: "cooperatives",
            b: "friendships",
            c: "associations"
        },
        correctAnswer: "b"
    },
    {

        question: 'Full grown marmoset monkeys grow to about',
        answers: {
            a: "8 inches",
            b: "24 inches",
            c: "60 inches"
        },
        correctAnswer: "a"
    },

    {

        question: 'Marmoset monkeys live in family groups of',
        answers: {
            a: "50 to 100 members",
            b: "25 to 50 members",
            c: "3 to 15 members"
        },
        correctAnswer: "c"
    },
    {

        question: 'Male lions have a typical weight of ',
        answers: {
            a: "330 to 550 pounds",
            b: "150 to 250 pounds",
            c: "600 to 700 pounds"
        },
        correctAnswer: "a"
    },

    {

        question: 'A group of female and male lions are called  ',
        answers: {
            a: "prides",
            b: "companies",
            c: "gangs"
        },
        correctAnswer: "a"
    },

    {

        question: 'A group of  male lions are called  ',
        answers: {
            a: "coalitions",
            b: "alliance",
            c: "leagues"
        },
        correctAnswer: "a"
    },
    {

        question: 'A lions roar can be heard from a distance of ',
        answers: {
            a: "20 miles",
            b: "50 miles",
            c: "5 miles"
        },
        correctAnswer: "c"
    },
    {
        question: "To play press the 'Restart Button'",

    },



];


//////Containers hold info and place them on page////////
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


////Quiz/////////////
///forEach method to generate html///
///loop to fill answer choices for the currrent question///



function buildQuiz() {

    var output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {

        var answers = [];


        for ([letter] in currentQuestion.answers) {
            answers.push(
                `<ul>
             <input type="radio" name="question${questionNumber}" value="${letter}">
             ${letter} :
             ${currentQuestion.answers[letter]}
             </ul> `


            );
        }


        output.push(
            `<div class="slide">
      <div class="question"> ${currentQuestion.question}</div> 
      <div class="answers"> ${answers.join(' ')} </div>
      </div> `
        );

    });


    ///join all together  and show on page////

    quizContainer.innerHTML = output.join(' ');
}

//display quiz//



buildQuiz();

//Handle the button click


////ShowResults 


function showResults() {

    var numCorrect = -1;


    const answerContainers = quizContainer.querySelectorAll('.answers');


    myQuestions.forEach((currentQuestion, questionNumber) => {


        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name="question${questionNumber}"]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;


        ////////if answer matches the correct choice increase number of correct answer by one///
        //////color the set of correct choices/////
        /////answer checking loop is done shows how many questions the user got right//////

        if (currentQuestion.correctAnswer === userAnswer) {
            numCorrect++;
            $(answerContainers[questionNumber]).css('color', "green");
           

        }

        else {
            $("#next").on('click', function () {
                $(answerContainers[questionNumber]).css('color', "black");});
               
        }



        if (currentQuestion.correctAnswer != userAnswer) {
            $(answerContainers[questionNumber]).css('color', "red");

        }

    });
    resultsContainer.innerHTML = "You have " + numCorrect + " correct";
   
}



//Next button clicked changes question and answers //    
//////Functions for slide shows///
/////Pagination////
var nextButton = document.getElementById('next');
var slides = document.querySelectorAll('.slide');
var myQuestionsArray = Math.floor(Math.random() * myQuestions.length);

let currentSlide = myQuestionsArray - 1;



function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
};


function showNextSlide() {
    showSlide(currentSlide + 1);

};

submitButton.addEventListener("click", showResults);
nextButton.addEventListener('click', showNextSlide);




showNextSlide();


///Restart Game//

$("#refresh").on('click', function () {
    location.reload();
});








