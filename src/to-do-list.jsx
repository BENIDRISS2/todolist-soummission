import { useTodoContext } from "./to-do-property";

const TodoList = () => {
  // Récupération de la liste des "to-do" depuis le contexte
  const { todoList,removeTodo}  = useTodoContext();

  return (
    <ul>
    {/* Utilisation correcte des parenthèses avec map */}
    {todoList.map((todo, index) => (
      <li key={index}>{todo}
      <button onClick={()=>removeTodo(index)}>X</button>
      </li> // Utilisation de key pour identifier chaque élément
    ))}
  </ul>
  );
}

export default TodoList;
