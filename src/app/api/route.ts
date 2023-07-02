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
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: "https://todo-list-65bab-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function GET() {
  const todo = await get(child(ref(db), "user/1001/todo"));
  return NextResponse.json(todo.val());
}

export async function POST(request: Request) {
  const body = await request.json();
  const newItemRef = push(ref(db, "user/1001/todo"));
  set(newItemRef, body).then(() => console.log("Done:", newItemRef.key));
  return NextResponse.json({ ...body, key: newItemRef.key });
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body) {
      return NextResponse.json(
        {
          message: "Request body is missing.",
        },
        {
          status: 400,
        }
      );
    }
    const { id, ...rest } = body;
    if (!id) {
      return NextResponse.json(
        {
          message: "Request body is missing id.",
        },
        {
          status: 400,
        }
      );
    }
    // const newItemRef = push(ref(db, "user/1001/todo/" + body.id));
    const updates: any = {};
    updates["user/1001/todo/" + body.id] = { ...rest };
    update(ref(db), updates);
    return NextResponse.json({ ...body });
  } catch (exception) {
    console.log("🚀 ~ file: route.ts:36 ~ PATCH ~ exception:", exception);
    return NextResponse.error();
  }
}
