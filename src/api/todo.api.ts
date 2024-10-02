import { Todo } from "../types/todo.types";

export const getTodos = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const todos: Todo[] = await response.json();

  return todos;
};

export const getTodoDetail = async (id: number) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`);
  const todo: Todo = await response.json();

  return todo;
};
