export default interface Todo {
  key: string;
  message: string;
  createdAt?: number;
  updatedAt?: number;
  doneAt?: number;
}
