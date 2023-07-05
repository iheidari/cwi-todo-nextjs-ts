import { NextResponse } from "next/server";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  push,
  update,
} from "firebase/database";
import firebase, { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: "https://todo-list-65bab-default-rtdb.firebaseio.com",
};

// Check if Firebase app is already initialized

// GET -> return all todos
// GET/[id] GET/1004 -> return todo with id=1004
// POST
// PUT PATCH
//DELETE

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const refTodo = ref(db, "user/1001/todo");

export async function GET(request: Request) {
  const todo = await get(child(ref(db), "user/1001/todo"));
  return NextResponse.json(todo.val());
}

export async function POST(request: Request) {
  const body = await request.json();
  const fullItem = { ...body, createdAt: Date.now(), updatedAt: Date.now() };
  const newItemRef = push(refTodo);
  set(newItemRef, fullItem).then(() => console.log("Done:", newItemRef.key));
  return NextResponse.json({ ...fullItem, key: newItemRef.key });
}

export async function PUT(request: Request) {
  const { id, ...rest } = await request.json();
  const updates: any = {};
  const oldTodo = await get(child(ref(db), "user/1001/todo/" + id));

  updates["user/1001/todo/" + id] = {
    ...rest,
    createdAt: oldTodo.val().createdAt,
    updatedAt: Date.now(),
  };
  update(ref(db), updates);
  return NextResponse.json({ ...updates["user/1001/todo/" + id] });
}

// DELETE
// PATCH
// HEAD
// OPTION
