import { PostHeaderData } from "../types";

export default function PostHeader({ name, location, avatar }: PostHeaderData) {
  return (
    <div>
      <img src={avatar} alt={`${name} Avatar`} />
      <p>{name}</p>
      <p>{location}</p>
    </div>
  );
}
