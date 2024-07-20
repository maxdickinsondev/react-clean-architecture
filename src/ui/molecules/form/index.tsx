import { Button } from "../../atoms/button";
import { TextField } from "../../atoms/textfield";
import { FormProps } from "./types";

export function Form({ buttonText, value, onChange, onClick }: FormProps) {
  return (
    <div className="w-full flex flex-row space-x-4">
      <TextField
        placeholder="Informe sua tarefa"
        value={value}
        onChange={onChange}
      />
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
}
