import { useEffect, useState } from 'react'
import './App.css'
import { useContext } from 'react'
import {todoProvider} from "./contexts"

function App() {
  const [todo, setTodos] = useState([])

  const addToDo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateToDo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id 
    === id? todo : prevTodo)))
  }

  const deleteToDo = (id) => {
    setTodos((prev)=> prev.filter((todo)=>todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo => prevTodo 
      === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo )))
  }

  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  return (
    <todoProvider value= {{todo, addToDo, updateToDo, toggleComplete, deleteToDo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </todoProvider>
  )
}

export default App
