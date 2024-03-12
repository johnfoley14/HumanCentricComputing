import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Data from './pages/Data';
import Header from './assets/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import GuiComponents from './pages/GuiComponents';
import { useState } from 'react';
import { ToastNotification } from '@carbon/react';
import Footer from './assets/Footer'; 
// // eslint-disable-next-line no-unused-vars
import './styling/toastNotification.css'
import '@carbon/react/scss/components/notification/_index.scss';


function App() {
  
  const [successToastOpen, setSuccessToastOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    showToast();
    if(user){
      setCurrentUser(user);
      console.log('current user is: ', currentUser);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast();
    setCurrentUser(null);
  };

  const showToast = () => {
    setSuccessToastOpen(true);

    setTimeout(() => {
      setSuccessToastOpen(false);
    }, 6000);
  };

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return users;
  }

  
  const [assignments, setAssignments] = useState([]);

  const getAssignments = () => {
    return assignments;
  }

  return (
    <div style={{position:'relative'}}>
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
          <Route index element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="login" element={<Login handleLogin={handleLogin} getUsers={getUsers} setUsers={setUsers}/>} />
          <Route path="logout" element={<Logout handleLogout={handleLogout}/>} />
          <Route path="data" element={<Data isLoggedIn={isLoggedIn}/>} />
          <Route path="salim" element={<GuiComponents 
          isLoggedIn={isLoggedIn} 
          getUsers={getUsers} 
          setAssignments={setAssignments} 
          getAssignments={getAssignments} 
          currrentUser={currentUser}/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

