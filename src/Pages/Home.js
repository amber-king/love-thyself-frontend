import React from "react";

// the home/welcome page where the user is welcomed and breifly told what the site is about
export default function Home() {
  return (
    <div className="Home">
      <center>
        <h1>Welcome to Love Thyself ❤️ </h1>
        <h4>
          {" "}
          Looking for a variety of quotes for various reasons, this is the
          place.🤗👋🏾 This is a minimalistic site for quote lovers to come and
          receive all types of words to enhance your day and mind through
          meaningful words. Enjoy!
        </h4>
      </center>
      <br></br>

      <center>
        <img
          src="https://usagif.com/wp-content/uploads/gif-heart-47.gif"
          alt="heart-img"
        ></img>
      </center>
    </div>
  );
}
