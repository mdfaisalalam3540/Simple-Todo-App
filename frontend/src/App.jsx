import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:5001/todos");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await res.json();
        setTodos(json.todos.slice(0, 10));  // Adjust this based on your data
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;

