import { useState } from 'react';
import './App.css';
import ModalForm from './components/ModalForm';
import useLocalStorage from './utils';

const App = () => {
  const [modalOpen, setModalOpen] = useState(true)
  const [todos, setTodos] = useLocalStorage("todos")
  const categories = [...new Set(todos.map(todo => todo.category))]
  const closeModal = () => setModalOpen(false)
  const handleSubmit = (event, todo) => {
    event.preventDefault()
    setTodos([...todos, todo])
    setModalOpen(false)
  }
  return (
    <div className="container">
      {/* <div className="grid-box"> */}
      <h2 className="introduction">Whats up, User</h2>
      <div className="categories">
        <h3 className="cat-title">Categories</h3>
        <div className="category-list">
          {
            !categories.length ? <div className="no-todo">You have no Todo's yet</div> : null
          }
          {
            categories.map((category, index) => {
              const len = todos.filter(todo => todo.category === category).length
              const completed = todos.filter(todo => todo.category === category && todo.pending === false).length
              console.log(completed)
              return (
                <div className="category" key={index}>
                  <p>{len} {len === 1 ? "task" : "tasks"}</p>
                  <h3>{category}</h3>
                  <div className="progress-container">
                    <div style = {{backgroundColor: "blue", width: `${(completed/len) * 100}%`}} className="progress-bar"></div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="tasks">
        <h2 className="task-title">Tasks</h2>
        {
          todos.map((todo, index) => {
            const { task, pending } = todo
            const handleCheck = (event) => {
              const todoIndex = todos.indexOf(todos.filter(todoFilt => todoFilt === todo)[0])
              let newTodo = todos.slice()
              const valTodo = {...todo, pending:!pending}
              newTodo.splice(todoIndex, 1)
              pending ? newTodo = [...newTodo, valTodo] : newTodo = [valTodo, ...newTodo]
              setTodos(newTodo)
              console.log(event.target)
            }
            return (
              <div className={pending ? "task" : "task task-done"} key={index} onClick={handleCheck}>
                <span className="task-bullet"></span><span className="val">{task}</span>
              </div>
            ) 
          })
        }
      </div>
      <button onClick={() => setModalOpen(true)} className="todo-button">+</button>
      <ModalForm modalOpen={modalOpen} categories={categories} handleSubmit={handleSubmit} closeModal={closeModal} />
      {/* </div> */}
    </div>
  );
}

export default App;
