import { useState, useEffect } from 'react';
import NotAuthorised from "../assets/NotAuthorised";
import PropTypes from 'prop-types';
import { getLightReading, getSoundReading } from "../store/data";
import { Tabs, TabList, Tab, TabPanels, TabPanel} from "@carbon/react";
import { LineChart } from "@carbon/charts-react";
import '@carbon/react/scss/components/tabs/_index.scss';
import '@carbon/charts/scss/index.scss';
import { getLightRecords } from '../store/data';

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
                  data={state.data}
                  options={state.options}>
                </LineChart>
              </TabPanel>
              <TabPanel>
                
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


let lightRecords = getLightRecords();
console.log('in data component', lightRecords);
const state = {
  data: [
{
  "group": "Dataset 1",
  "date": "2019-01-01T00:00:00.000Z",
  "value": 50000,
  "surplus": 767570018.4422063
},
{
  "group": "Dataset 1",
  "date": "2019-01-05T00:00:00.000Z",
  "value": 65000,
  "surplus": 386414536.5287671
},
{
  "group": "Dataset 1",
  "date": "2019-01-08T00:00:00.000Z",
  "value": null,
  "surplus": 23261.667227851023
},
{
  "group": "Dataset 1",
  "date": "2019-01-13T00:00:00.000Z",
  "value": 49213,
  "surplus": 152927612.04525757
},
{
  "group": "Dataset 1",
  "date": "2019-01-17T00:00:00.000Z",
  "value": 51213,
  "surplus": 24111033.384511266
},
{
  "group": "Dataset 2",
  "date": "2019-01-02T00:00:00.000Z",
  "value": 0,
  "surplus": 16133.182474915935
},
{
  "group": "Dataset 2",
  "date": "2019-01-06T00:00:00.000Z",
  "value": 57312,
  "surplus": 1385336617.315204
},
{
  "group": "Dataset 2",
  "date": "2019-01-08T00:00:00.000Z",
  "value": 27432,
  "surplus": 34962667.56828345
},
{
  "group": "Dataset 2",
  "date": "2019-01-15T00:00:00.000Z",
  "value": 70323,
  "surplus": 1701279136.5667734
},
{
  "group": "Dataset 2",
  "date": "2019-01-19T00:00:00.000Z",
  "value": 21300,
  "surplus": 460562493.55375874
},
{
  "group": "Dataset 3",
  "date": "2019-01-01T00:00:00.000Z",
  "value": 40000,
  "surplus": 317493496.273485
},
{
  "group": "Dataset 3",
  "date": "2019-01-05T00:00:00.000Z",
  "value": null,
  "surplus": 16581.917250095114
},
{
  "group": "Dataset 3",
  "date": "2019-01-08T00:00:00.000Z",
  "value": 18000,
  "surplus": 217260513.35414466
},
{
  "group": "Dataset 3",
  "date": "2019-01-13T00:00:00.000Z",
  "value": 39213,
  "surplus": 917426685.4520112
},
{
  "group": "Dataset 3",
  "date": "2019-01-17T00:00:00.000Z",
  "value": 61213,
  "surplus": 69887917.16679396
},
{
  "group": "Dataset 4",
  "date": "2019-01-02T00:00:00.000Z",
  "value": 20000,
  "surplus": 302819758.4577358
},
{
  "group": "Dataset 4",
  "date": "2019-01-06T00:00:00.000Z",
  "value": 37312,
  "surplus": 862708684.2458872
},
{
  "group": "Dataset 4",
  "date": "2019-01-08T00:00:00.000Z",
  "value": 51432,
  "surplus": 1258977279.315406
},
{
  "group": "Dataset 4",
  "date": "2019-01-15T00:00:00.000Z",
  "value": 25332,
  "surplus": 288227353.5723978
},
{
  "group": "Dataset 4",
  "date": "2019-01-19T00:00:00.000Z",
  "value": null,
  "surplus": 21317.95087341723
}
],
  options: {
"title": "Line (time series)",
"axes": {
  "bottom": {
    "title": "2019 Annual Sales Figures",
    "mapsTo": "date",
    "scaleType": "time"
  },
  "left": {
    "mapsTo": "value",
    "title": "Conversion rate",
    "scaleType": "linear"
  }
},
"curve": "curveMonotoneX",
"height": "400px"
}
};

export default Data;
