import { useState } from "react"
const ModalForm = ({categories, handleSubmit, modalOpen, closeModal}) => {
    const [todo, setTodo] = useState({category: "", task: "", pending: true})
    const { category, task } = todo
    
    const handleChange = (event) => {
      const { name, value } = event.target
      name === "task" ? setTodo({...todo, task: value}) : setTodo({...todo, category: value})
    }
    return (
      <div className={modalOpen ? "modal-form" : "modal-form hide-modal"}>
        <div onClick={closeModal} className="close-modal">X</div>
        <form onSubmit={(event) => {
          setTodo({category: "", task: "", pending: true})
          handleSubmit(event, todo)}}>
          <input onChange={handleChange} value={task} name="task" placeholder="Enter Task Here" required/>
          <br />
          <input onChange={handleChange} value={category} list="categories" name="categories" placeholder="Enter Category Here" required/>
          <datalist id="categories">
            {
              categories.length < 2 ?
              <>
              <option value="Personal"/>
              <option value="Business"/>
              </>
              :
              categories.map((category, index) => {
                return (
                  <option key={index} value={category}/>
                )
              })
            }
          </datalist>
          <br />
          <button>Submit Here</button>
        </form>
      </div>
    )
  }

  export default ModalForm;