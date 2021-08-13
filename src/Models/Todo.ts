class Todo {
  text: string;
  id: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toString();
  }
}
export default Todo;
