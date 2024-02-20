import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Submission from './pages/Submission';
import Header from './assets/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

let isLoggedIn = false;

export function setTrue() {
  isLoggedIn = true;
}

export function setFalse() {
  isLoggedIn = false;
}

export { isLoggedIn };


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Header/>} >
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="project" element={<Submission />} />
        </Route>
      </Routes>
      <p>This is the footer here</p>
    </BrowserRouter>
  );
}

export default App;

