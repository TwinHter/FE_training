function GetRandNumber(min, max) {
  return Math.floor(Math.random()*(max-min)) + min;
}
const btn = document.querySelector('#new-quote');
const content = document.querySelector('.content');

let Data = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    author: "Steve Jobs"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    author: "Oprah Winfrey"
  },
];
btn.addEventListener("click", (e) => {
  let id = GetRandNumber(0, Data.length);
  const quote = content.firstElementChild, author = content.lastElementChild;

  quote.innerHTML = Data[id].quote;
  author.innerHTML = Data[id].author;
})