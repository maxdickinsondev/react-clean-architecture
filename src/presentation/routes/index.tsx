import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Task } from "../../ui/pages/task";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}
