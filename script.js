const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuote = document.querySelector(".new-quote-btn");
const share = document.querySelector(".share-btn");
const URL = "https://api.quotable.io/quotes/random";

async function getQuote(url) {

  try {

    const response = await fetch(url);
    if (response.status === 429) {
      throw new Error("Too many requests.")
    }

    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`)
    }

    const data = await response.json();
    quote.innerHTML = `" ${data[0].content} "`;
    author.innerHTML = data[0].author;

  } catch (error) {
    alert(error.message);
  }
}

function shareQuote() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerHTML}---${author.innerHTML}`
  );
}

newQuote.addEventListener("click", () => {
  getQuote(URL);
});

share.addEventListener("click", () => {
  shareQuote();
});
