import { PostData } from "../types";
import PostHeader from "./PostHeader";
import Comment from "./Comment";
import ActionButton from "./ActionButton";

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

  const onClickAction = (buttonID: string): void => {
    console.log(buttonID);
  };

  const actionButtons: JSX.Element[] = [
    {
      buttonID: "like-btn",
      iconClass: "fa-heart",
      onClick: onClickAction,
    },
    {
      buttonID: "comment-btn",
      iconClass: "fa-comment-dots",
      onClick: onClickAction,
    },
    {
      buttonID: "send-btn",
      iconClass: "fa-paper-plane",
      onClick: onClickAction,
    },
  ].map((data) => <ActionButton key={data.buttonID} {...data} />);

  return (
    <div>
      <PostHeader name={name} location={location} avatar={avatar} />
      <div className="w-375px h-375px overflow-hidden">
        <img
          src={post}
          alt={`${name}'s post. User Name: ${username}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full px-10px py-20px grid grid-col-1 gap-y-14px">
        <div className="w-104px h-22px flex place-content-between">
          {actionButtons}
        </div>

        <div>
          <p className="font-bold text-13px">
            <span>{likes}</span>likes
          </p>
        </div>

        <div>{commentsEls}</div>
      </div>
    </div>
  );
}
