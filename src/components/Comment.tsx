import { CommentData } from "../types";

export default function Comment({ username, comment }: CommentData) {
  return (
    <p className="text-13px">
      <span className="font-bold">{username}</span>
      <span>{comment}</span>
    </p>
  );
}
