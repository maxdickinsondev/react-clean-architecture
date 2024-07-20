import { Actions } from "./actions";
import { ListItem } from "./list-item";
import { ListProps } from "./types";

export function List({ data }: ListProps) {
  return (
    <>
      <ul className="space-y-2">
        {data.map((item) => (
          <div key={item.id} className="w-full flex flex-row justify-between">
            <ListItem title={item.title} />
            {/* <Actions /> */}
          </div>
        ))}
      </ul>
    </>
  );
}
