import { Todo } from "@/types/todo.types";

export const getTodos = async () => {
  const response = await fetch("http://localhost:5000/todos", {
    cache: "no-store",
  });
  const todos: Todo[] = await response.json();

  return todos;
};

export const getTodoDetail = async (id: string) => {
  const response = await fetch(`http://localhost:5000/todos/${id}`, {
    cache: "no-store",
  });
  const todo: Todo = await response.json();

  return todo;
};

export const addTodo = async (text: string) => {
  const response = await fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text, completed: false }),
  });

  const todo: Todo = await response.json();

  return todo;
};
