import TodoList from "@/components/todo-list";
import { getTodo } from "@/servics/todo";

export default async function Home() {
  const todoList = await getTodo();
  const todos = Object.keys(todoList || {}).map((key) => ({
    key,
    ...todoList[key],
  }));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList todos={todos} />
    </main>
  );
}
