import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../store/slices/counterSlice';

import { Plus, Minus } from 'lucide-react';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
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
        
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add 5
        </button>
      </div>
    </div>
  );
}

export default Counter;