import { PostHeaderData } from "../types";

export default function PostHeader({ name, location, avatar }: PostHeaderData) {
  return (
    <div className="flex p-10px space-x-8px">
      <img
        src={avatar}
        alt={`${name} Avatar`}
        className="w-34px h-34px rounded-full"
      />
      <div>
        <p className="text-13px font-bold">{name}</p>
        <p className="text-12px">{location}</p>
      </div>
    </div>
  );
}
