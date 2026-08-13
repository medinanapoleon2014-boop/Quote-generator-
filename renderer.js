//DOM
const quoteCard = document.querySelector(".quoteCard")
const quoteText = document.getElementById("quoteText")
const quoteBtn = document.getElementById("quoteBtn")

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
