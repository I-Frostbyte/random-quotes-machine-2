import { useState, useEffect } from "react";
import React from "react";
import { FaTwitter, FaTumblr } from "react-icons/fa";

function App() {
  const [Quotes, setQuotes] = useState("");
  // const [Author, setAuthor] = useState("");
  const [Quote, setQuote] = useState({q:"",a:""});

  useEffect(() => {
    fetch("http://localhost:8080/Quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuotes(data);
        setQuote(data[Math.floor(Math.random() * data.length)]);
        
      });

  }, []);
  
    const newQuote = () => {
      const indexQuotes = Math.floor(Math.random() * Quotes.length);
      return Quotes[indexQuotes];
    };
  

  const handleClick = () => {
    newQuote();
    setQuote(newQuote);
    // setAuthor(newQuote.a);
  };

  return (
    <div id="quote-box">
      <div id="content-wrapper">
        <div id="text-wrapper">
        <h1 id="text">{Quote.q}</h1>
        <p id="author">- {Quote.a}</p>
        </div>
        <div id="below-author">
          <div id="icons">
            <div id="twitter-icon">
              <a href="twitter.com/intent/tweet" id="tweet-quote">
                <FaTwitter
                  size={20}
                  style={{ color: "#fff" }}
                  className="fas fa-twitter"
                />
              </a>
            </div>
            <div id="tumblr-icon">
              <FaTumblr
                size={20}
                style={{ color: "#fff" }}
                className="fas fa-tumblr"
              />
            </div>
          </div>
          <div id="new-quote-button">
            <button
              id="new-quote"
              onClick={handleClick}
              style={{ color: "#fff" }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// const fetchQuotes = async () => {
//   const request = await fetch("https://zenquotes.io/api/quotes", {
//     type: "GET",
//     headers: "Access-Control-Allow-Origin: *",
//   })
//     .then((res) => res.json())
//     .then((results) => console.log(results))
//     .catch((e) => {
//       console.log(e);
//     });
//   // setQuotes(request);
//   // console.log(request);
// };

// fetchQuotes();

/*

[
  {
    "q": "Your dream has to be bigger than your fear.",
    "a": "Steve Harvey",
    "c": "43",
    "h": "<blockquote>&ldquo;Your dream has to be bigger than your fear.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>"
  },
  {
    "q": "Persistence. Perfection. Patience. Power. Prioritize your passion. It keeps you sane.",
    "a": "Criss Jami",
    "c": "85",
    "h": "<blockquote>&ldquo;Persistence. Perfection. Patience. Power. Prioritize your passion. It keeps you sane.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
  },
  {
    "q": "Always try to be a little kinder than necessary.",
    "a": "James Matthew Barrie",
    "c": "48",
    "h": "<blockquote>&ldquo;Always try to be a little kinder than necessary.&rdquo; &mdash; <footer>James Matthew Barrie</footer></blockquote>"
  },
  {
    "q": "You may forget with whom you laughed, but you will never forget with whom you wept.  ",
    "a": "Kahlil Gibran",
    "c": "85",
    "h": "<blockquote>&ldquo;You may forget with whom you laughed, but you will never forget with whom you wept.  &rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>"
  },
  {
    "q": "The key to immortality is first living a life worth remembering. ",
    "a": "Bruce Lee",
    "c": "65",
    "h": "<blockquote>&ldquo;The key to immortality is first living a life worth remembering. &rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>"
  },
  {
    "q": "To do great work one must be very idle as well as very industrious.",
    "a": "Samuel Butler",
    "c": "67",
    "h": "<blockquote>&ldquo;To do great work one must be very idle as well as very industrious.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>"
  },
  {
    "q": "There is no path to Love. Love is the path.",
    "a": "Dan Millman",
    "c": "43",
    "h": "<blockquote>&ldquo;There is no path to Love. Love is the path.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>"
  },
  {
    "q": "The future belongs to those who believe in the beauty of their dreams.",
    "a": "Eleanor Roosevelt",
    "c": "70",
    "h": "<blockquote>&ldquo;The future belongs to those who believe in the beauty of their dreams.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
  },
  {
    "q": "Make each day a new horizon.",
    "a": "Christopher McCandless",
    "c": "28",
    "h": "<blockquote>&ldquo;Make each day a new horizon.&rdquo; &mdash; <footer>Christopher McCandless</footer></blockquote>"
  },
  {
    "q": "To forgive means pardoning the unpardonable.",
    "a": "Gilbert Chesterton",
    "c": "44",
    "h": "<blockquote>&ldquo;To forgive means pardoning the unpardonable.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>"
  },
  {
    "q": "Leadership is solving problems",
    "a": "Colin Powell",
    "c": "30",
    "h": "<blockquote>&ldquo;Leadership is solving problems&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>"
  },
  {
    "q": "Love is not about possession. Love is about appreciation.",
    "a": "Osho",
    "c": "57",
    "h": "<blockquote>&ldquo;Love is not about possession. Love is about appreciation.&rdquo; &mdash; <footer>Osho</footer></blockquote>"
  },
  {
    "q": "Only those who will risk going too far can possibly find out how far one can go.",
    "a": "T.S. Eliot",
    "c": "80",
    "h": "<blockquote>&ldquo;Only those who will risk going too far can possibly find out how far one can go.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>"
  },
  {
    "q": "Light a candle instead of cursing the darkness.",
    "a": "Eleanor Roosevelt",
    "c": "47",
    "h": "<blockquote>&ldquo;Light a candle instead of cursing the darkness.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
  },
  {
    "q": "Most of us live our lives by accident - we live as it happens. Fulfilment comes when we live our lives on purpose.",
    "a": "Simon Sinek",
    "c": "114",
    "h": "<blockquote>&ldquo;Most of us live our lives by accident - we live as it happens. Fulfilment comes when we live our lives on purpose.&rdquo; &mdash; <footer>Simon Sinek</footer></blockquote>"
  },
  {
    "q": "Amateurs sit and wait for inspiration, the rest of us just get up and got to work.",
    "a": "Stephen King",
    "c": "82",
    "h": "<blockquote>&ldquo;Amateurs sit and wait for inspiration, the rest of us just get up and got to work.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>"
  },
  {
    "q": "The more you give, the more comes back to you.",
    "a": "Napoleon Hill",
    "c": "46",
    "h": "<blockquote>&ldquo;The more you give, the more comes back to you.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
  },
  {
    "q": "True love stories never have endings.",
    "a": "Richard Bach",
    "c": "37",
    "h": "<blockquote>&ldquo;True love stories never have endings.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
  },
  {
    "q": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "a": "Henry David Thoreau",
    "c": "100",
    "h": "<blockquote>&ldquo;What you get by achieving your goals is not as important as what you become by achieving your goals.&rdquo; &mdash; <footer>Henry David Thoreau</footer></blockquote>"
  },
  {
    "q": "Living life in style also means living a life of balance.",
    "a": "Jim Rohn",
    "c": "57",
    "h": "<blockquote>&ldquo;Living life in style also means living a life of balance.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
  },
  {
    "q": "Most people get ahead during the time that others waste.",
    "a": "Henry Ford",
    "c": "56",
    "h": "<blockquote>&ldquo;Most people get ahead during the time that others waste.&rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"
  },
  {
    "q": "To achieve, you need thought. You have to know what you are doing and that's real power.",
    "a": "Ayn Rand",
    "c": "88",
    "h": "<blockquote>&ldquo;To achieve, you need thought. You have to know what you are doing and that's real power.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
  },
  {
    "q": "It doesn't matter how much you want. What really matters is how much you want it.",
    "a": "Ralph Marston",
    "c": "81",
    "h": "<blockquote>&ldquo;It doesn't matter how much you want. What really matters is how much you want it.&rdquo; &mdash; <footer>Ralph Marston</footer></blockquote>"
  },
  {
    "q": "I'd rather welcome change than cling to the past.",
    "a": "Robert Kiyosaki",
    "c": "49",
    "h": "<blockquote>&ldquo;I'd rather welcome change than cling to the past.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"
  },
  {
    "q": "Do anything, but let it produce joy.",
    "a": "Walt Whitman",
    "c": "36",
    "h": "<blockquote>&ldquo;Do anything, but let it produce joy.&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>"
  },
  {
    "q": "You can do two things at once, but you can't focus effectively on two things at once.",
    "a": "Gary Keller",
    "c": "85",
    "h": "<blockquote>&ldquo;You can do two things at once, but you can't focus effectively on two things at once.&rdquo; &mdash; <footer>Gary Keller</footer></blockquote>"
  },
  {
    "q": "You have the freedom to be yourself, your true self, here and now, and nothing can stand in your way.",
    "a": "Richard Bach",
    "c": "101",
    "h": "<blockquote>&ldquo;You have the freedom to be yourself, your true self, here and now, and nothing can stand in your way.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
  },
  {
    "q": "Happiness is not something ready made. It comes from your own actions.",
    "a": "Dalai Lama",
    "c": "70",
    "h": "<blockquote>&ldquo;Happiness is not something ready made. It comes from your own actions.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>"
  },
  {
    "q": "Avoiding danger is no safer in the long run than exposure.",
    "a": "Helen Keller",
    "c": "58",
    "h": "<blockquote>&ldquo;Avoiding danger is no safer in the long run than exposure.&rdquo; &mdash; <footer>Helen Keller</footer></blockquote>"
  },
  {
    "q": "When you have to make a choice and don't make it, that is in itself a choice.",
    "a": "William James",
    "c": "77",
    "h": "<blockquote>&ldquo;When you have to make a choice and don't make it, that is in itself a choice.&rdquo; &mdash; <footer>William James</footer></blockquote>"
  },
  {
    "q": "Wherever you are, it's the place you need to be.",
    "a": "Maxime Lagace",
    "c": "48",
    "h": "<blockquote>&ldquo;Wherever you are, it's the place you need to be.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
  },
  {
    "q": "Do what is right, not what is easy, nor what is popular.",
    "a": "Roy T. Bennett",
    "c": "56",
    "h": "<blockquote>&ldquo;Do what is right, not what is easy, nor what is popular.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
  },
  {
    "q": "The friendship that can cease has never been real. ",
    "a": "St. Jerome",
    "c": "51",
    "h": "<blockquote>&ldquo;The friendship that can cease has never been real. &rdquo; &mdash; <footer>St. Jerome</footer></blockquote>"
  },
  {
    "q": "The only real security that a man can have in this world is a reserve of knowledge, experience and ability. ",
    "a": "Henry Ford",
    "c": "108",
    "h": "<blockquote>&ldquo;The only real security that a man can have in this world is a reserve of knowledge, experience and ability. &rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"
  },
  {
    "q": "What the mind can conceive, it can achieve.",
    "a": "Napoleon Hill",
    "c": "43",
    "h": "<blockquote>&ldquo;What the mind can conceive, it can achieve.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
  },
  {
    "q": "Of all men's miseries the bitterest is this: to know so much and to have control over nothing. ",
    "a": "Herodotus",
    "c": "95",
    "h": "<blockquote>&ldquo;Of all men's miseries the bitterest is this: to know so much and to have control over nothing. &rdquo; &mdash; <footer>Herodotus</footer></blockquote>"
  },
  {
    "q": "I no doubt deserved my enemies, but I don't believe I deserved my friends.",
    "a": "Walt Whitman",
    "c": "74",
    "h": "<blockquote>&ldquo;I no doubt deserved my enemies, but I don't believe I deserved my friends.&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>"
  },
  {
    "q": "Success is getting what you want, happiness is wanting what you get.",
    "a": "W.P. Kinsella",
    "c": "68",
    "h": "<blockquote>&ldquo;Success is getting what you want, happiness is wanting what you get.&rdquo; &mdash; <footer>W.P. Kinsella</footer></blockquote>"
  },
  {
    "q": "The purpose of life is to contribute in some way to making things better.",
    "a": "Robert F. Kennedy",
    "c": "73",
    "h": "<blockquote>&ldquo;The purpose of life is to contribute in some way to making things better.&rdquo; &mdash; <footer>Robert F. Kennedy</footer></blockquote>"
  },
  {
    "q": "To wish you were someone else is to waste the person you are.",
    "a": "Unknown",
    "c": "61",
    "h": "<blockquote>&ldquo;To wish you were someone else is to waste the person you are.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
  },
  {
    "q": "A man is literally what he thinks.",
    "a": "James Allen",
    "c": "34",
    "h": "<blockquote>&ldquo;A man is literally what he thinks.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"
  },
  {
    "q": "Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.",
    "a": "Roy T. Bennett",
    "c": "100",
    "h": "<blockquote>&ldquo;Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
  },
  {
    "q": "Courage is found in unlikely places.",
    "a": "J.R.R. Tolkien",
    "c": "36",
    "h": "<blockquote>&ldquo;Courage is found in unlikely places.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
  },
  {
    "q": "FEAR has two meanings: 'Forget Everything And Run' or 'Face Everything And Rise.' The choice is yours.",
    "a": "Zig Ziglar",
    "c": "102",
    "h": "<blockquote>&ldquo;FEAR has two meanings: 'Forget Everything And Run' or 'Face Everything And Rise.' The choice is yours.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
  },
  {
    "q": "What loneliness is more lonely than distrust?",
    "a": "George Eliot",
    "c": "45",
    "h": "<blockquote>&ldquo;What loneliness is more lonely than distrust?&rdquo; &mdash; <footer>George Eliot</footer></blockquote>"
  },
  {
    "q": "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.",
    "a": "Brian Tracy",
    "c": "129",
    "h": "<blockquote>&ldquo;Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "I don't walk away from things that I think are unfinished.",
    "a": "Arnold Schwarzenegger",
    "c": "58",
    "h": "<blockquote>&ldquo;I don't walk away from things that I think are unfinished.&rdquo; &mdash; <footer>Arnold Schwarzenegger</footer></blockquote>"
  },
  {
    "q": "The fastest way to change is to laugh at your own folly.",
    "a": "Spencer Johnson",
    "c": "56",
    "h": "<blockquote>&ldquo;The fastest way to change is to laugh at your own folly.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
  },
  {
    "q": "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
    "a": "Theodore Roosevelt",
    "c": "109",
    "h": "<blockquote>&ldquo;If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>"
  },
  {
    "q": "Perseverance and spirit have done wonders in all ages. ",
    "a": "George Washington",
    "c": "55",
    "h": "<blockquote>&ldquo;Perseverance and spirit have done wonders in all ages. &rdquo; &mdash; <footer>George Washington</footer></blockquote>"
  }
]

*/
