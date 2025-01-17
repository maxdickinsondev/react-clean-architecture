import { useTask } from "../../../presentation/hooks/useTask";
import { Form } from "../../molecules/form";
import { EmptyState } from "./components/empty-state";
import { List } from "./components/list";

export function Task() {
  const {
    task,
    tasks,
    onChangeTask,
    onDeleteTask,
    onUpdateTask,
    onCreateTask,
  } = useTask();

  return (
    <main
      role="main"
      className="h-screen bg-slate-200 flex items-center flex-col"
    >
      <div className="mt-40 w-full max-w-screen-md px-4">
        <div className="mb-10">
          <Form
            value={task}
            onChange={onChangeTask}
            onClick={() => onCreateTask({ title: task })}
            buttonText="Adicionar"
          />
        </div>
        {tasks.length > 0 ? (
          <List
            data={tasks}
            onUpdateItem={onUpdateTask}
            onDeleteItem={onDeleteTask}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  );
}
