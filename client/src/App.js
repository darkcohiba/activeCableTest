import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user), setIsAuthenticated(true));
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-200 to-blue-600">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
      <Routes>
        <Route exact path="/" element={<Home user={user}/>}/>
        <Route exact path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
        <Route exact path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
