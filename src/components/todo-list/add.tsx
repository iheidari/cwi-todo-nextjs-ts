"use client";

import { createTodo } from "@/servics/todo";
import { useRef } from "react";

const Add = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      message: { value: string };
    };
    const message = target.message.value;
    const response = await createTodo({ message });
    formRef.current?.reset();
    console.log("🚀 ~ file: add.tsx:13 ~ handleSubmit ~ response:", response);
  };
  return (
    <>
      <h3>Add Item</h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input id="message" type="text" />
        <input type="submit" value="Add" />
        <input type="reset" value="reset" />
      </form>
    </>
  );
};

export default Add;
