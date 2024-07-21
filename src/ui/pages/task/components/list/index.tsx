import { ListItem } from "./list-item";
import { ListProps } from "./types";

export function List({ data, onUpdateItem, onDeleteItem }: ListProps) {
  return (
    <>
      <ul className="space-y-2">
        {data.map((item) => (
          <div key={item.id} className="w-full flex flex-row justify-between">
            <ListItem
              title={item.title}
              checked={item.completed as boolean}
              onCheckItem={() => onUpdateItem(item.id as number, item)}
              onDeleteItem={() => onDeleteItem(item.id as number)}
            />
          </div>
        ))}
      </ul>
    </>
  );
}
