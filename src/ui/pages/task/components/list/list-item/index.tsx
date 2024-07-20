import { ListItemProps } from "./types";

export function ListItem({ title }: ListItemProps) {
  return (
    <li className="bg-white shadow px-4 py-1 rounded-md w-full ">{title}</li>
  );
}
