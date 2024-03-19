import { useState, useEffect } from 'react';
import NotAuthorised from "../assets/NotAuthorised";
import PropTypes from 'prop-types';
import { Tabs, TabList, Tab, TabPanels, TabPanel, ContainedList, ContainedListItem} from "@carbon/react";
import { LineChart } from "@carbon/charts-react";
import '@carbon/react/scss/components/tabs/_index.scss';
import '@carbon/react/scss/components/contained-list/_index.scss';
import '@carbon/charts/scss/index.scss';
import { getLightReading, getSoundReading, getLightRecords, getSoundRecords } from "../store/data";

const Data = ({ isLoggedIn }) => {
  const [light, setLight] = useState(null);
  const [sound, setSound] = useState(null);
  const [blindState, setBlindState] = useState(null);
  const [manualMode, setManualMode] = useState(null);
  const [lightRecords, setLightRecords] = useState([]);
  const [soundRecords, setSoundRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lightData = await getLightReading();
        setLight(lightData);

        const soundData = await getSoundReading();
        setSound(soundData);

        const blindStateData = await fetch('/api/blind-state');
        setBlindState(blindStateData);

        const manualModeData = await fetch('/api/manual-mode');
        setManualMode(manualModeData);
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000); // Update data every second
    fetchData(); // Fetch initial data
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const lightRecordsData = await getLightRecords();
        setLightRecords(lightRecordsData);

        const soundRecordsData = await getSoundRecords();
        setSoundRecords(soundRecordsData);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords(); // Fetch initial records
  }, []);

  const refreshRecords = async () => {
    try {
      const lightRecordsData = await getLightRecords();
      setLightRecords(lightRecordsData);

      const soundRecordsData = await getSoundRecords();
      setSoundRecords(soundRecordsData);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  if (isLoggedIn) {
    return (
      <div style={{ height: '180vh' }}>
        <h1 style={{textAlign:'center'}}>Smart Reels Data</h1>
        <div style={{margin:'3%', backgroundColor:'white', border:'2px solid rgb(104, 198, 125)', textAlign:'center'}}>
        <ContainedList label="Real time system status" kind="on-page">
          <ContainedListItem>Light reading: {light}</ContainedListItem>
          <ContainedListItem>Sound reading: {sound}</ContainedListItem>
          <ContainedListItem>Blind state: {blindState ? "Up" : "Down"}</ContainedListItem>
          <ContainedListItem>Manual mode: {manualMode}</ContainedListItem>
        </ContainedList>
        </div>
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
          <button style={{marginLeft:'2%'}}onClick={refreshRecords}>Refresh Records</button>
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
