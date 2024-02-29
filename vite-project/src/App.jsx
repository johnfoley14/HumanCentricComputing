import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Submission from './pages/Submission';
import Header from './assets/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { useState } from 'react';


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };



  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="signup" element={<SignUp handleLogin={handleLogin} isLoggedIn={isLoggedIn}/>} />
        <Route path="project" element={<Submission isLoggedIn={isLoggedIn}/>} />
      </Routes>
      <p>This is the footer here</p>
    </BrowserRouter>
  );
}

export default App;

