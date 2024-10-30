// import logo from './logo.svg';
import TodoProvider from './to-do-property';
import './App.css';
import TodoList from './to-do-list';
import TodoForm from './todo-form';

const App = () => {
  return (
    <div className="App">
      <header>
       <h1> TO DO LIST</h1>
      </header>
      <TodoProvider>
      <TodoForm/>
        <TodoList/>
      </TodoProvider>
    </div>
  );
}

export default App;
