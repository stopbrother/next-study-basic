"use client";
import { addTodo } from "@/api/todo-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import React from "react";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const onSubmitTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title")?.toString().trim();

    if (!title) return;

    await mutateAsync(title);

    form.reset();
  };
  return (
    <form onSubmit={onSubmitTodo}>
      <input type="text" name="title" placeholder="할 일을 입력하세요" />
      <button>추가</button>
    </form>
  );
};

export default TodoForm;
