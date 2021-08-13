import TodoClass from '../Models/Todo';
import { useState } from 'react';
import { createContext } from 'react';
type TodoContextAlias = {
  items: TodoClass[];
  onAddTodo: (text: string) => void;
  onRemoveTodo: (id: string) => void;
};
export const contextAuth = createContext<TodoContextAlias>({
  items: [],
  onAddTodo: (text: string) => {},
  onRemoveTodo: (id: string) => {},
});
const AuthContextProvider: React.FC = (props) => {
  const [todoList, setTodoList] = useState<TodoClass[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoClass(todoText);
    setTodoList((prevTodo) => {
      return [...prevTodo, newTodo];
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };
  const contextValue: TodoContextAlias = {
    items: todoList,
    onAddTodo: addTodoHandler,
    onRemoveTodo: removeTodoHandler,
  };
  return (
    <contextAuth.Provider value={contextValue}>
      {props.children}
    </contextAuth.Provider>
  );
};
export default AuthContextProvider;
