const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuote = document.querySelector(".new-quote-btn");
const share = document.querySelector(".share-btn");
const URL = "https://api.quotable.io/quotes/random";
async function getQuote(url) {
  console.log("click");
  try {
    const response = await fetch(url);
    if (response.status === 429) {
      alert("Please try again later!!");
      return;
    }
    if (!response.ok) {
      alert("Failed to fetch quote.");
      return;
    }
    const data = await response.json();
    console.log(data);
    quote.innerHTML = `" ${data[0].content} "`;
    author.innerHTML = data[0].author;
  } catch (error) {
    alert("An error occurred while fetching the quote.");
    console.error(error);
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
