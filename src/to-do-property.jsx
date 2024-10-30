import { createContext, useContext, useState } from "react";

// Création du contexte
const TodoContext = createContext();

// État initial pour la liste de tâches
const initialTodoListState = ['Learn React Context API'];

// Fournisseur de contexte
const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialTodoListState); // Correction de l'initialisation

    const getNumberOfTodoItems =()=>todoList.length;
    const addTodo = (newTodoItem)=>{
        setTodoList([...todoList,newTodoItem]);
    }

    const removeTodo=(todoIndex)=>{
const newList = todoList.filter((_,index)=>index!==todoIndex)
setTodoList(newList)
    }
     // Valeurs du contexte
     const contextValue = {
        todoList,   // Utilisation de "todoList" avec "t" minuscule
        setTodoList, // Ajout de setTodoList pour pouvoir modifier la liste
        getNumberOfTodoItems,
        addTodo,
        removeTodo,
    };

  

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;

