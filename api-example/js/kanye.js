const loadQuotes = () => {
     fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));
}

const displayQuote = quote => {
    const quoteElements = document.getElementById('quote');
    quoteElements.innerText = quote.quote;
}