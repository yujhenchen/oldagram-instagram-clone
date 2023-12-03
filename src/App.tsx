// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { posts } from "./posts";
import { PostData } from "./types";

function App() {
  const user: PostData = posts[0];

  const header = (
    <>
      <h1 className="">Oldagram</h1>
      <div className="w-34px h-34px rounded-full overflow-hidden">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );

  return (
    <main className="w-375px mx-auto">
      <Header children={header} />
      <section className="grid grid-col-1 gap-y-28px">
        {posts.map((post, index) => (
          <Post key={`${post.username}_${index}`} {...post} />
        ))}
      </section>
    </main>
  );
}

export default App;
