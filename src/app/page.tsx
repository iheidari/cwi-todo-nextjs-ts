import TodoList from "@/components/todo-list";
import { getTodo } from "@/servics/todo";

export default async function Home() {
  const todos = await getTodo();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList todos={todos} />
    </main>
  );
}
