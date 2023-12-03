import { useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import { posts } from "./posts";
import { PostData } from "./types";

type PostItem = PostData & { likedStyle: string };

function App() {
  const [postsList, setPostsList] = useState<PostItem[]>(
    [...posts].map((post) => ({ ...post, likedStyle: "" }))
  );

  const user: PostData = postsList[0];

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

  const onLikePost = (postID: string) => {
    setPostsList((ls) =>
      ls.map((post) =>
        post.id === postID
          ? { ...post, likes: post.likes++, likedStyle: "color-red" }
          : post
      )
    );
  };

  return (
    <main className="w-375px mx-auto">
      <Header children={header} />
      <section className="grid grid-col-1 gap-y-28px">
        {postsList.map((post, index) => (
          <Post
            key={`${post.username}_${index}`}
            {...post}
            onLike={onLikePost}
            likedStyle={post.likedStyle}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
