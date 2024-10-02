import { getTodoDetail } from "@/api/todo.api";
import React from "react";

interface TodoDetailPageProps {
  params: {
    id: number;
  };
}

const TodoDetailPage = async ({ params }: TodoDetailPageProps) => {
  const id = params.id;
  const { content, completed } = await getTodoDetail(id);

  return (
    <div>
      TodoDetailPage {content} - {completed ? "완료됨" : "미완료"}
    </div>
  );
};

export default TodoDetailPage;
