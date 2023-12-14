import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./index.css"


function App() {
  const [todo, setTodo] = useState("")
  const [items, setItems] = useState([])


  const handleTodo = (e) => {
    setTodo(e.target.value)
  }

  const addItem = () => {
    if (!todo) {
      alert("Lütfen veri giriniz")
    } else {
      const item = {
        id: new Date().getTime(),
        value: todo,
      }
      setItems([...items, item])
      setTodo("");
    }
  }

  const deleteItem = (id) => {
    const lastItems = items.filter(item => item.id !== id)
    setItems(lastItems)
  }



  return (
    <div className="container">
      <div className="d-flex  justify-content-between">
        <a href="./index.html">
        <img  src="./img/todo-react.png" alt="todo-react" width="100px" className='img-logo' />
        </a>

        <Header handleTodo={handleTodo} todo={todo} addItem={addItem} />
      </div>

      <h2 className='text-center text-secondary'>Tasks</h2>
      <div className="d-flex justify-content-center">
        <ul className='mx-auto list-group gap-2 w-100 '>
          <TodoList items={items} deleteItem={deleteItem} setItems={setItems} />
        </ul>
      </div>
    </div>
  );
}

export default App;
