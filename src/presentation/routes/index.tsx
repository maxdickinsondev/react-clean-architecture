import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Task } from "../../ui/pages/task";
import { NotFound } from "../../ui/pages/not-found";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
