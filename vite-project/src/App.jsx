import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Submission from './pages/Submission';
import Header from './assets/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { useState } from 'react';


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route index element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="login" element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn}/>} />
        <Route path="logout" element={<Logout handleLogout={handleLogout}/>} />
        <Route path="project" element={<Submission isLoggedIn={isLoggedIn}/>} />
      </Routes>
      <p>This is the footer here</p>
    </BrowserRouter>
  );
}

export default App;

