// GET A RANDOM COMPLIMENT
const complimentBtn = document.querySelector("#complimentButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            alert(res.data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
// LIKE A FORTUNE QUOTE
const increaseLike = (id, numberOfLikes) => { 
    const paramsObj = {
        params: {
            // id: id,
            numberOfLikes: numberOfLikes,
        }
    };
    axios.get(`http://localhost:4000/api/fortunes/like/${paramsObj.params.numberOfLikes}`) 
    .then((res) => { 
        // for (element of res.data) { 
        //     if (element.id === id){ 
        //         console.log(element.numberOfLikes); 
        //     } 
        // } 
        console.log(res.data);       
        // displayAllQuotesFunc();
    })
}

// GET ALL FORTUNE QUOTES
const getAllQuotesBtn = document.querySelector("#getAllQuotes");
const displayAllQuotes = document.querySelector("#displayAllQuotes");

// display quotes
function displayQuotesFunc(arr) {
    displayAllQuotes.innerHTML = ""; 
    for (element of arr) {
        displayQuoteCard(element);
    }
}

// create a quote card
function displayQuoteCard(quote) {
    const quoteCard = document.createElement("div");
    quoteCard.classList.add('quote-card');

    quoteCard.innerHTML = 
    `<div class="btns-container"> 
    <p class="quote-display">${quote.id}</p>
    <p class="quote-display">${quote.quote}</p><br>
    <p class="quote-display">${quote.numberOfLikes}</p><br>
    </div>   
    <button id="like" onclick="increaseLike(${quote.id}, ${quote.numberOfLikes})">Like</button>
    <button id="delete" onclick="deleteQuote(${quote.id})">Delete</button>      
    ` 
    displayAllQuotes.appendChild(quoteCard);
} 

// display all quotes
function displayAllQuotesFunc() {
    axios.get("http://localhost:4000/api/fortunes")
        .then((res) => {
            console.log(res);
            displayQuotesFunc(res.data);
        })
}
getAllQuotesBtn.addEventListener('click', displayAllQuotesFunc); 

// DELETE A QUOTE
function deleteQuote(id) {
    console.log(id);
    fetch.delete(`http://localhost:4000/api/fortune/${id}`)
        .then((res) => {
            console.log(res);
            // displayQuotesFunc(res.data);
        })
}

// DELETE A QUOTE WITH A QUERY STRING
const deleteQuoteForm = document.querySelector("#deleteQuote");
const deleteQuoteFunction = (event) => {
    event.preventDefault();
    const wordToBeDeleteValue = document.querySelector("#deleteQuoteInput").value;
    let deleteObj = {wordToBeDelete: wordToBeDeleteValue};
    axios.delete(`http://localhost:4000/api/fortune/` + wordToBeDeleteValue)
    .then(res => {
        alert(res.data);
    })
}
deleteQuoteForm.addEventListener('submit', deleteQuoteFunction);

// GET FORTUNE
const fortuneBtn = document.querySelector("#fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune") 
    .then((res) => {
        alert(res.data); 
    }) 
} 

fortuneBtn.addEventListener('click', getFortune);

// GET FORTUNE QUOTE ABOUT FRIEND
const fortuneBtnWithFriend = document.querySelector("#fortuneAboutFriend");

const getFortuneWithFriend = () => {
    axios.get("http://localhost:4000/api/fortune/friend")
    .then((res) => {
        alert(res.data);
    })
}
fortuneBtnWithFriend.addEventListener('click', getFortuneWithFriend);

// ADD A NEW FORTUNE QUOTE 
const addQuoteForm = document.querySelector("#addquote");
const addNewFortuneQuote = (event) => {
    event.preventDefault();
    const newFortuneQuoteValue = document.querySelector("#newFortuneQuote").value;
    let body = {newFortuneQuote: newFortuneQuoteValue};
    axios.post("http://localhost:4000/api/addNewFortuneQuote", body)
    .then(res => alert(res.data));
    document.querySelector("#newFortuneQuote").value = "";
}
addQuoteForm.addEventListener('submit', addNewFortuneQuote);





