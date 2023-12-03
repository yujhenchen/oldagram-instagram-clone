import { CommentData } from "../types";

export default function Comment({ username, comment }: CommentData) {
  return (
    <p className="text-13px">
      <span className="font-bold mr-4px">{username}</span>
      <span>{comment}</span>
    </p>
  );
}
