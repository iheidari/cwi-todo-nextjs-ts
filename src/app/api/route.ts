import { NextResponse } from "next/server";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  push,
  onChildAdded,
  onChildChanged,
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

// onChildAdded(refTodo, (snapshot) => {
//   console.log(
//     "🚀 ~ file: route.ts:47 ~ snapshot.forEach ~ snapshot:",
//     snapshot.size
//   );

//   snapshot.forEach((childSnapshot) => {
//     const childKey = childSnapshot.key;
//     console.log(
//       "🚀 ~ file: route.ts:32 ~ snapshot.forEach ~ childKey:",
//       childKey
//     );
//     const childData = childSnapshot.val();
//     console.log(
//       "🚀 ~ file: route.ts:34 ~ snapshot.forEach ~ childData:",
//       childData
//     );
//     const childExist = childSnapshot.exists();
//     console.log(
//       "🚀 ~ file: route.ts:34 ~ snapshot.forEach ~ childData:",
//       childExist
//     );
//   });
// });

// onChildChanged(refTodo, (data) => {
//   // console.log("🚀 ~ file: route.ts:38 ~ onChildChanged ~ data:", data.key);
// });

export async function GET(request: Request) {
  // await set(ref(db, "user/[userId]/todo"), {
  //   username: "iman2",
  //   email: "iman2@coding.com",
  //   profile_picture: "imageUrl2",
  // });
  const todo = await get(child(ref(db), "user/1001/todo"));
  console.log("🚀 ~ file: route.ts:70 ~ GET ~ todo:", todo.val());
  return NextResponse.json(todo.val());
  //

  // connect to Firebase Realtime Database
  // Retrieve all todos
  // Return to user
}

export async function POST(request: Request) {
  const body = await request.json();
  const newItemRef = push(refTodo);
  set(newItemRef, body).then(() => console.log("Done:", newItemRef.key));
  return NextResponse.json({ ...body, key: newItemRef.key });
}
// POST
// PUT
// DELETE
// PATCH
// HEAD
// OPTION
