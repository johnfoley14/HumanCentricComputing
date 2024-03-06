import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Submission from './pages/Submission';
import Header from './assets/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { useState } from 'react';
import { ToastNotification } from '@carbon/react';
import Footer from './assets/Footer'; 
// eslint-disable-next-line no-unused-vars
import './styling/ToastNotification.css'


function App() {
  
  const [successToastOpen, setSuccessToastOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast();
  };

  const showToast = () => {
    setSuccessToastOpen(true);

    setTimeout(() => {
      setSuccessToastOpen(false);
    }, 6000);
  };


  return (
    <div style={{width:'100%', height:'100%'}}>
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn}/>
      {successToastOpen && (
              <ToastNotification
                className='notification'
                kind="success" // or "error", "info", "warning"
                title={`Successful ${isLoggedIn ? 'Login' : 'Logout'}`}
                onCloseButtonClick={() => setSuccessToastOpen(false)}
              />
            )} 
        <Routes>
          <Route index element={<Home isLoggedIn={isLoggedIn} successToastOpen={successToastOpen}/>} />
          <Route path="login" element={<Login handleLogin={handleLogin} showToast={showToast}/>} />
          <Route path="logout" element={<Logout handleLogout={handleLogout} successToastOpen={successToastOpen}/>} />
          <Route path="project" element={<Submission isLoggedIn={isLoggedIn} successToastOpen={successToastOpen}/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

