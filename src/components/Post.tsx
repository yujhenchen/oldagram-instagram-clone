import { PostData } from "../types";
import PostHeader from "./PostHeader";
import Comment from "./Comment";

export default function Post({
  name,
  username,
  location,
  avatar,
  post,
  comments,
  likes,
}: PostData) {
  const commentsEls: JSX.Element[] = comments.map((comment, index) => (
    <Comment
      key={`${comment.username}_${index}`}
      username={comment.username}
      comment={comment.comment}
    />
  ));

  return (
    <div>
      <PostHeader name={name} location={location} avatar={avatar} />
      <img src={post} alt={`${name}'s post. User Name: ${username}`} />
      <div>
        <button className="w-24px h-24px">
          <i className="fa-regular fa-heart w-full h-full" />
        </button>

        <button>
          <i className="fa-regular fa-comment-dots" />
        </button>

        <button>
          <i className="fa-regular fa-paper-plane" />
        </button>
      </div>

      <div>
        <p>
          <span>{likes}</span>likes
        </p>
      </div>
      <div>{commentsEls}</div>
    </div>
  );
}
