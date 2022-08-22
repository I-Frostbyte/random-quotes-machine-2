import { useState, useEffect } from "react";
import React from "react";
import { FaTwitter, FaTumblr } from "react-icons/fa";

function App() {
  const [Quotes, setQuotes] = useState("");
  const [Author, setAuthor] = useState("");

  useEffect(() => {
    const fetchQuotes = async () => {
      const request = await fetch("https://zenquotes.io/api/quotes", {
        type: "GET",
        headers: "Access-Control-Allow-Origin: *",
      })
        .then((res) => res.json())
        .then((results) => console.log(results))
        .catch((e) => {
          console.log(e);
        });
      // setQuotes(request);
      // console.log(request);
    };

    fetchQuotes();

    const newQuote = () => {
      const indexQuotes = Math.floor(Math.random() * fetchQuotes.length);
      return fetchQuotes[indexQuotes];
    };
  }, []);

  const handleClick = () => {
    // setQuotes(newQuote.q);
    // setAuthor(newQuote.a);
  };

  return (
    <div id="quote-box">
      <div id="content-wrapper">
        <h1 id="text">{Quotes}</h1>
        <p id="author">- {Author}</p>
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
