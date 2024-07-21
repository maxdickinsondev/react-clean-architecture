import { Task } from "../../../../../domain/entities/task";

export interface ListProps {
  data: Task[];
  onUpdateItem: (id: number, data: Task) => void;
  onDeleteItem: (id: number) => void;
}
