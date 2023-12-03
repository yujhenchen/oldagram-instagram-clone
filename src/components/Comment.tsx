import { CommentData } from "../types";

export default function Comment({ username, comment }: CommentData) {
  return (
    <p>
      <span>{username}</span>
      <span>{comment}</span>
    </p>
  );
}
