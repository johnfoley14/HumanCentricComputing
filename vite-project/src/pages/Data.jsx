import { useState, useEffect } from 'react';
import NotAuthorised from "../assets/NotAuthorised";
import PropTypes from 'prop-types';
import { getLightReading, getSoundReading } from "../store/data";
import { Tabs, TabList, Tab, TabPanels, TabPanel} from "@carbon/react";
import { LineChart } from "@carbon/charts-react";
import '@carbon/react/scss/components/tabs/_index.scss';
import '@carbon/charts/scss/index.scss';
import { getLightRecords, getSoundRecords } from '../store/data';


let lightRecords = await getLightRecords();
let soundRecords = await getSoundRecords();

const Data = ({ isLoggedIn }) => {
  const [light, setLight] = useState(null);
  const [sound, setSound] = useState(null);

  isLoggedIn = true;
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
      <div style={{ height: '180vh' }}>
        <h1>Project Data</h1>
        <p>
          Thank you for considering; Light Reading: {light} Sound Reading: {sound}
        </p>
        <div style={{backgroundColor:'white', margin:'3%', borderRadius:'20px', border:'2px solid rgb(104, 198, 125)'}}>
          <Tabs>
            <TabList aria-label="List of tabs">
              <Tab>Light Data</Tab>
              <Tab>Sound Data</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LineChart
                  data={lightRecords}
                  options={options}>
                </LineChart>
              </TabPanel>
              <TabPanel>
              <LineChart
                  data={soundRecords}
                  options={options}>
                </LineChart>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
  }

  return <NotAuthorised admin={''} />;
};

Data.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};



const options = {
"title": "Line (time series)",
"axes": {
  "bottom": {
    "title": "Time",
    "mapsTo": "time",
    "scaleType": "time"
  },
  "left": {
    "mapsTo": "value",
    "title": "Sensor Reading",
    "scaleType": "linear"
  }
},
"curve": "curveMonotoneX",
"height": "400px"
}

export default Data;
