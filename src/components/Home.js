import React from "react";
import "../css/articles.css";
const Home = () => {
  return (
    <>
      <div>
        <h1>Welcome To Article Content Management System</h1>
        <img
          className="intro"
          src={process.env.PUBLIC_URL + "/article.jpg"}
          alt="article"
        ></img>
      </div>
    </>
  );
};

export default Home;
