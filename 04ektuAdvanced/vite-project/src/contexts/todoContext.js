import { createContext, useContext } from "react";

export const todoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "todo message",
            completed: false,

        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {},
})


export const useTodo = () => {
    return useContext(todoContext)
}
// toggle, change, id, delete, read, update => these are the functionality.

export const todoProvider = todoContext.Provider