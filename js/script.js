//Question 1
//Answer question 1: The product is logged out of stock

var outOfStock = true

if (outOfStock === true) {
    console.log("Out of Stock");
}
else {
    console.log("In Stock");
}

//Question 2
//Answer question 2: Now only 17 and 20 is console logged

for (var i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

//Question 3
//Answer question 3: The witcher and the Elders scrolls are the ones logges in the console because the are both under 3.5. I also excluded null. 

var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elders Scrolls",
        rating: 2.9,
    },
];

for (var i = 0; i < games.length; i++) {
    var title = games[i].title;
    var rating = games[i].rating;

    if (rating != null && rating <= 3.4) {
        console.log(title);
    }
}


//COME BACK TO THIS ONE
var gameOne = "The Elders Scrolls";
var gameTwo = "The Witcher";

var gamesContainer = document.querySelector("ul");
gamesContainer.innerHTML = gameOne + gameTwo

console.log(gamesContainer);
//


//Question 4
//Answer question 4

function whatIDontLike(theWord) {
    console.log(theWord);
}
whatIDontLike("rain");

var typeofWord = typeof theWord;
if (typeofWord === "string") {
    console.log("Please send in a string");
}
else {
    console.log("I Don't like" + " " + "rain");
}

//Question 5
//Answer question 5

function funcName(arg1, arg2) {

    var convertedArg1 = parseFloat(arg1);
    var convertedArg2 = parseFloat(arg2);

    if (isNaN(convertedArg1) || isNaN(convertedArg2)) {
        return "Invalig arguments";
    }
    return convertedArg1 + convertedArg2;
}

var substraction = document.querySelector("substraction");
var sum = funcName(1, 42);



//Question 6
//Answer question 6, when i added a new function the previous one does not work. But all the function workes without the next one..

var buttonPage = document.querySelector(".page")


// changing title
function changeTitle() {
    document.title = "Updated title";
}
buttonPage.onclick = changeTitle;

//changing colour
function changeBackground(colour) {
    document.body.style.backgroundColor = "yellow";
}
buttonPage.onclick = changeBackground;


//changing color of h1
var heading = document.querySelector("h1");
var button = document.querySelector(".page")
console.dir(button);

button.onclick = function () {
    heading.style.color = "green";
}



//Question 7
//Answer question 7

var button = document.querySelector(".price");
button.onclick = function () {
    button.innerHTML
}

var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];



