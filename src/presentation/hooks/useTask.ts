import { ChangeEvent, useEffect, useState } from "react";
import { Task } from "../../domain/entities/task";
import { makeCreateTaskUseCase } from "../../main/factories/usecases/create-task-usecase-factory";
import { makeGetTasksUseCase } from "../../main/factories/usecases/get-tasks-usecase-factory";
import { makeUpdateTaskUseCase } from "../../main/factories/usecases/update-task-usecase-factory";
import { makeDeleteTaskUseCase } from "../../main/factories/usecases/delete-task-usecase-factory";

const createTaskUseCase = makeCreateTaskUseCase();
const getTasksUseCase = makeGetTasksUseCase();
const updateTaskUseCase = makeUpdateTaskUseCase();
const deleteTaskUseCase = makeDeleteTaskUseCase();

export function useTask() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function onChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function onClearTask() {
    setTask("");
  }

  async function onGetTasks() {
    try {
      const response = await getTasksUseCase.execute();
      // @ts-ignore
      setTasks(response.body.tasks || []);
    } catch (err) {
      console.error(err);
    }
  }

  async function onCreateTask(data: Task) {
    try {
      await createTaskUseCase.execute(data);
      onClearTask();
      await onGetTasks();
    } catch (err) {
      console.error(err);
    }
  }

  async function onUpdateTask(id: number, data: Task) {
    try {
      await updateTaskUseCase.execute({
        id,
        data: { ...data, completed: !data.completed },
      });
      await onGetTasks();
    } catch (err) {
      console.error(err);
    }
  }

  async function onDeleteTask(id: number) {
    try {
      await deleteTaskUseCase.execute({ id });
      await onGetTasks();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    onGetTasks();
  }, []);

  return {
    task,
    tasks,
    onChangeTask,
    onClearTask,
    onCreateTask,
    onGetTasks,
    onUpdateTask,
    onDeleteTask,
  };
}
