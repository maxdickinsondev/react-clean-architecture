import { ListItemProps } from "./types";
import { TrashIcon } from "@heroicons/react/24/solid";

export function ListItem({
  title,
  checked,
  onCheckItem,
  onDeleteItem,
}: ListItemProps) {
  return (
    <li className="bg-white flex flex-row items-center shadow px-4 py-3 space-x-4 rounded-md w-full">
      <input
        data-testid="checkbox"
        type="checkbox"
        className="w-4 h-4 cursor-pointer"
        checked={checked}
        onChange={onCheckItem}
      />
      <span className={`w-full ${checked && "line-through"}`}>{title}</span>
      <TrashIcon
        data-testid="delete-icon"
        className="h-6 w-6 cursor-pointer text-red-500"
        onClick={onDeleteItem}
      />
    </li>
  );
}
