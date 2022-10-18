import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="bg-gradient-to-r from-red-200 to-blue-600">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
