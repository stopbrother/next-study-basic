"use client";

import TodoItem from "./TodoItem";
import { useTodoQuery } from "@/query/useTodoQuery";

const TodoList = () => {
  const { data: todos, isLoading } = useTodoQuery();

  if (isLoading) return <div>로딩중...</div>;

  return (
    <ul className="flex flex-col gap-2">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
