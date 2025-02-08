import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../store/slices/todoSlice';
import { increment, decrement, reset } from '../store/slices/counterSlice';
import { CheckCircle, Circle, Trash2, Plus, Minus, RotateCcw } from 'lucide-react';

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const count = useSelector(state => state.counter.value);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <>
      {/* Todo Section */}
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Todo List</h1>

          <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="h-5 w-5" />
            </button>
          </form>

          <ul className="space-y-3">
            {todos.map(todo => (
              <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className="text-gray-500 hover:text-indigo-600"
                  >
                    {todo.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Circle className="h-5 w-5" />
                    )}
                  </button>
                  <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
         {/* Counter Section */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Counter</h2>

          <div className="text-6xl font-bold text-indigo-600 mb-8">{count}</div>

          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={() => dispatch(decrement())}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <Minus className="h-5 w-5 mr-2" />
              Decrease
            </button>

            <button
              onClick={() => dispatch(increment())}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              Increase
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => dispatch(reset())}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Reset
          </button>
        </div>
      </div>
      </div>

     
    </>
  );
}

export default Todo;
