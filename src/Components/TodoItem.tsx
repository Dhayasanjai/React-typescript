const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li
      className="font-bold text-xl bg-gray-50 w-full md:w-10/12 mx-auto text-center px-2 py-1 rounded overflow-scroll example"
      onClick={props.onRemoveTodo}
    >
      {props.text}
    </li>
  );
};
export default TodoItem;
