"use client";
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "@/query/useTodoMutation";
import { Todo } from "@/types/todo.types";
import Link from "next/link";

import React from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: deleteTodo } = useDeleteTodoMutation();
  const { mutate: toggleTodo } = useToggleTodoMutation();

  const { id, text, completed } = todo;

  return (
    <div>
      <Link href={`/todo/${id}`}>{text}</Link>-{completed ? "완료됨" : "미완료"}
      <button onClick={() => deleteTodo(id)}>삭제</button>
      <button onClick={() => toggleTodo({ id, completed: !completed })}>
        {completed ? "완료됨" : "미완료"}
      </button>
    </div>
  );
};

export default TodoItem;
