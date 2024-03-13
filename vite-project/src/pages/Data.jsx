import { useState, useEffect } from 'react';
import NotAuthorised from "../assets/NotAuthorised";
import PropTypes from 'prop-types';
import { getLightReading, getSoundReading } from "../store/data";

const Data = ({ isLoggedIn }) => {
  const [light, setLight] = useState(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lightData = await getLightReading();
        setLight(lightData);

        const soundData = await getSoundReading();
        setSound(soundData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000); // Update data every second
    fetchData(); // Fetch initial data
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (isLoggedIn) {
    return (
      <div style={{ height: '80vh' }}>
        <h1>Project Data</h1>
        <p>
          Thank you for considering; Light Reading: {light} Sound Reading: {sound}
        </p>
      </div>
    );
  }

  return <NotAuthorised admin={''} />;
};

Data.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Data;
