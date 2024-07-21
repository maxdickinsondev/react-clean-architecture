export interface ListItemProps {
  title: string;
  checked: boolean;
  onDeleteItem: () => void;
  onCheckItem: () => void;
}
