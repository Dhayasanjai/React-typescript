import React, { useRef } from 'react';
import { useContext } from 'react';
import { contextAuth } from '../Store/context-auth';
const NewTodo: React.FC = () => {
  const authCtx = useContext(contextAuth);

  const textRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (textRef.current!.value.length === 0) return;
    authCtx.onAddTodo(textRef.current!.value);
    console.log(authCtx);
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4  w-full">
      <label htmlFor="text" className="text-center text-3xl font-bold">
        Add Your own Todo
      </label>
      <input
        placeholder="Enter your todo..."
        id="text"
        type="text"
        ref={textRef}
        className="block w-8/12 mx-auto px-2 py-1 rounded font-bold"
      ></input>
      <button
        type="submit"
        className="mb-4 bg-white w-12 px-2 py-1 font-bold  text-center mx-auto rounded-md "
      >
        Add
      </button>
    </form>
  );
};
export default NewTodo;
