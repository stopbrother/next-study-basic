import React from "react";

interface TodoDetailPageProps {
  params: {
    id: string;
  };
}

const TodoDetailPage = ({ params }: TodoDetailPageProps) => {
  const id = params.id;

  return <div>Detailpage: {id}</div>;
};

export default TodoDetailPage;
