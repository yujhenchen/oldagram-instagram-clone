import { ActionButtonData } from "../types";

export default function ActionButton({
  buttonID,
  iconClass,
  onClick,
}: ActionButtonData) {
  return (
    <button
      id={buttonID}
      className="w-full h-full"
      onClick={(event) =>
        onClick((event.currentTarget as HTMLButtonElement).id)
      }
    >
      <i className={`fa-solid ${iconClass} w-full h-full align-middle`} />
    </button>
  );
}
