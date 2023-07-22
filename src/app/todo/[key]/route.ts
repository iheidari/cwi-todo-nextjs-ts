import { getDatabase, ref, remove } from "firebase/database";
import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: "https://todo-list-65bab-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export async function DELETE(
  _request: Request,
  { params }: { params: { key: string } }
) {
  const { key } = params;
  const toDelete = ref(db, `user/1001/todo/${key}`);
  await remove(toDelete);
  return NextResponse.json({ key: params.key });
}
