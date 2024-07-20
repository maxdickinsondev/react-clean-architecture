import { ChangeEvent } from "react";

export interface FormProps {
  value: string | number;
  buttonText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
