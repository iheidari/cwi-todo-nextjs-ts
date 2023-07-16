"use client";

import { createTodo } from "@/servics/todo";
import Todo from "@/types/todo";
import { useRef } from "react";

interface Props {
  onAdd: (todo: Todo) => void;
  onError: (error: string) => void;
}

const Add = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      message: { value: string };
    };
    const message = target.message.value;
    const response = await createTodo({ message });
    if (response) {
      props.onAdd({ ...response });
      formRef.current?.reset();
      return;
    }
    props.onError("Failed to save the todo");
  };
  return (
    <>
      <h3>Add Item</h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input id="message" type="text" />
        <input type="submit" value="Add" style={{ marginLeft: 16 }} />
      </form>
    </>
  );
};

export default Add;
