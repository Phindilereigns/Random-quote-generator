const quotes = [
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "You probably don’t exist in the future you are worried about.",
    author: "Brianna Wiest",
  },
  {
    quote:
      "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
    author: "Kahlil Gibran",
  },
  {
    quote:
      "It is not the man who has too little, but the man who craves more, that is poor.",
    author: "Seneca",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
];
window.onload = displayQuote;
function displayQuote() {
  generateQuote();
}

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("text").innerText = randomQuote.quote;

  document.getElementById("author").innerText = `- ${randomQuote.author}`;

  const tweetLink = document.getElementById("tweet-quote");
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    randomQuote.quote
  )} - ${encodeURIComponent(randomQuote.author)}`;
  tweetLink.setAttribute("href", tweetUrl);
  tweetLink.setAttribute("target", "_blank");
}
