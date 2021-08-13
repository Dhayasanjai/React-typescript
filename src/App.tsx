import Todo from './Components/Todo';
import NewTodo from './Components/NewTodo';
import AuthContextProvider from './Store/context-auth';
function App() {
  return (
    <AuthContextProvider>
      <div className="bg-gray-200 rounded-lg shadow-xl w-11/12 md:w-10/12 max-w-2xl  mx-auto  mt-20 flex flex-col  items-center  gap-2 p-10 mb-10">
        <NewTodo />
        <div className="border-b border-black w-full opacity-50"></div>
        <Todo></Todo>
      </div>
    </AuthContextProvider>
  );
}

export default App;
