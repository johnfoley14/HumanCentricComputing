import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Submission from './pages/Submission';
import Header from './assets/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Header/>} >
          <Route index element={<h1>hello</h1>} /> {/* Add a route for the Login component */}
          <Route path="signup" element={<h1>hello</h1>} /> {/* Add a route for the Signup component */}
          <Route path="submission" element={<Submission />} />
          <Route path="project" element={<p>Hello</p>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
