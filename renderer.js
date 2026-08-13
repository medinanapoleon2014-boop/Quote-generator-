//DOM
const signIn = document.querySelector(".signIn")
const dashboard = document.querySelector(".dashboard")
const signInForm = document.querySelector(".signInForm")
const quoteCard = document.querySelector(".quoteCard")
const username = document.getElementById("username")
const password = document.getElementById("password")
const signInBtn = document.getElementById("signInBtn")
const quoteText = document.getElementById("quoteText")
const quoteBtn = document.getElementById("quoteBtn")

//SignIn function
signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (username.value === 'admin' && password.value === 'admin123') {
        signIn.hidden = true;
        dashboard.hidden = false;
    } else {
        alert("incorrect Password or Username");
    }
});

//dashboard quoteCard
let quotes = [];
let currentQuote = 0;


fetch("quotes.json")
    .then(response => response.json())
    .then(data => {
        quotes = data;

        // Get the first quote
        console.log(data[0].quote);
    })
    .catch(error => {
        console.error("Error loading quotes:", error);
    });

quoteBtn.addEventListener("click", () => {
    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }

    quoteText.textContent = quotes[currentQuote].quote;

});