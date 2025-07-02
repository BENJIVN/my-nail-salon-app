import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import AppNavbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
   <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      {/* Add More routes in here*/}
    </Routes>
   </Router>
  );
}

export default App;
