import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Submission from './pages/Submission';
import Header from './assets/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      
      
      <Routes>
        <Route exact path="/" index element={<p>Hello</p>}>
        </Route>
        <Route path="/submission" element={<Submission></Submission>}>
        </Route>
        <Route path="/login" element={<p>Hello</p>}>
        </Route>
        <Route path="/project" element={<p>Hello</p>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
