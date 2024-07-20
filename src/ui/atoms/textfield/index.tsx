import { TextFieldProps } from "./types";

export function TextField({ ...rest }: TextFieldProps) {
  return (
    <input
      {...rest}
      className="w-full py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-green-600"
    />
  );
}
