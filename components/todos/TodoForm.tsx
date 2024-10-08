"use client";

import { useAddTodoMutation } from "@/query/useTodoMutation";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TodoForm = () => {
  const { mutate: addTodo } = useAddTodoMutation();

  const onSubmitTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title")?.toString().trim();

    if (!title) return;

    await addTodo(title);

    form.reset();
  };
  return (
    <form onSubmit={onSubmitTodo} className="flex flex-col gap-2">
      <Input type="text" name="title" placeholder="할 일을 입력하세요" />
      <div className="text-right">
        <Button className="w-fit">추가</Button>
      </div>
    </form>
  );
};

export default TodoForm;
