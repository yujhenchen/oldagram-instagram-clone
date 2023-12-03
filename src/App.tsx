// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { posts } from "./data";
import { PostData } from "./types";

function App() {
  const user: PostData = posts[0];

  const header = (
    <>
      <h1 className="">Oldagram</h1>
      <div>
        <img src={user.avatar} alt={user.name} />
      </div>
    </>
  );

  return (
    <>
      <Header children={header} />
      {posts.map((post, index) => (
        <Post key={`${post.username}_${index}`} {...post} />
      ))}
    </>
  );
}

export default App;
