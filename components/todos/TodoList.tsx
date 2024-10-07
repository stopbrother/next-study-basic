import { getTodos } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const TodoList = async () => {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) return <div>로딩중...</div>;

  return (
    <ul>
      {todos?.map(({ id, completed, text }) => (
        <li key={id}>
          <Link href={`/todo/${id}`}>
            {text} - {completed ? "완료됨" : "미완료"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
