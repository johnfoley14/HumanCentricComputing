import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Submission from './pages/Submission';
import Header from './assets/Header';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Header/>} >
          <Route index element={<Home />} />
          <Route path="signup" element={<Submission />} />
          <Route path="project" element={<Submission />} />
        </Route>
      </Routes>
      <p>This is the footer here</p>
    </BrowserRouter>
  );
}

export default App;

