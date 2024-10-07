import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/todos/TodoList";

const RootPage = () => {
  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
};

export default RootPage;
