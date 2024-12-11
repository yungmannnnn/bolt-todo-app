import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState('');

      const handleAddTodo = () => {
        if (input.trim()) {
          setTodos([...todos, { text: input, completed: false }]);
          setInput('');
        }
      };

      const handleToggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
      };

      const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };

      return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Todo App</h1>
          <div className="mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new todo..."
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <button onClick={handleAddTodo} className="px-4 py-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600">
              Add
            </button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className={`flex items-center justify-between p-2 border-b ${todo.completed ? 'line-through' : ''}`}>
                <span>{todo.text}</span>
                <div>
                  <button onClick={() => handleToggleComplete(index)} className="px-2 py-1 bg-green-500 text-white rounded mr-2 hover:bg-green-600">
                    {todo.completed ? 'Undo' : 'Done'}
                  </button>
                  <button onClick={() => handleDeleteTodo(index)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
