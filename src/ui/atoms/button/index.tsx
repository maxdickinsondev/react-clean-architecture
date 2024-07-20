import { ButtonProps } from "./types";

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="bg-green-600 px-10 py-1 text-white rounded-lg hover:bg-green-700 transition duration-200"
    >
      {children}
    </button>
  );
}
