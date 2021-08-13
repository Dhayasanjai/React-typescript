import TodoItem from './TodoItem';
import React from 'react';
import { useContext } from 'react';
import { contextAuth } from '../Store/context-auth';

// const Todo: React.FC<{
//   todoList: TodoClass[];
//   onRemoveTodo: (todoId: string) => void;
// }> = (props) => {
const Todo: React.FC = () => {
  const authCtx = useContext(contextAuth);
  return (
    <ul className="flex flex-col gap-4 w-full ">
      {authCtx.items.map((item) => {
        return (
          <TodoItem
            text={item.text}
            key={item.id}
            onRemoveTodo={authCtx.onRemoveTodo.bind(null, item.id)}
          ></TodoItem>
        );
      })}
    </ul>
  );
};
export default Todo;
