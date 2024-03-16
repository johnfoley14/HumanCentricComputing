import { useState} from 'react';
import axios from 'axios';

function JokeApp() {
  const [jokesHistory, setJokesHistory] = useState([]); // Keep track of previous jokes


  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      const data = response.data;
      const newJoke = data.joke;

      setJokesHistory(prevHistory => [...prevHistory, newJoke]);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJokesHistory(prevHistory => [...prevHistory, "Sorry, couldn't fetch a joke right now. Please try again later."]);
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <h1>Dad Joke App</h1>
      <button onClick={fetchJoke}>Get Joke</button>
      <textarea
        style={{width: '80%', height: '300px'}}
        value={jokesHistory.join('\n\n')} // Join jokes with two new lines for better readability
        readOnly
      />
    </div>
  );
}

export default JokeApp;
