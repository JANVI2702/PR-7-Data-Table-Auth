import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store/store';
import Login from './components/Login';
import Signup from './components/Signup';
import Todo from './components/Todo';
import Counter from './components/Counter';
import { logout } from './store/slices/authSlice';

function ProtectedRoute({ element }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/signup" replace />;
}

function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    isAuthenticated && (
      <div className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-lg font-bold">My App</h1>
        <button
          onClick={() => dispatch(logout())}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>
    )
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/todo" element={<ProtectedRoute element={<Todo />} />} />
            <Route path="/counter" element={<ProtectedRoute element={<Counter />} />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
