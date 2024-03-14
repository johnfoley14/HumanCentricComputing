import '@carbon/react/scss/components/tile/_index.scss';
import { ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react';
import Insulation from '../images/Insulation.jpeg';
import Ease from '../images/EaseOfUse.jpeg';
import Mobility from '../images/Mobility.jpeg';
import Security from '../images/Security.jpeg';

const Home = () => {
    
    return (
      <div style={{height: '160vh'}}>
        <ul style={{listStyleType: 'none', overflow: 'hidden', display: 'flex', justifyContent: 'space-evenly'}}>
          <li>
            <br></br>
            <br></br>
            <h1 style={{fontFamily:'Brandon Grotesque, sans-serif'}}>The all-in-one Smart Blind<br></br> you never knew you needed </h1>
            <p style={{fontFamily: 'Brandon Grotesque, sans-serif'}}>The only modular solution that provides automation for blinds at<br></br> a customer friendly cost. 
              Our product is designed to be <br></br>easily installed and used by anyone.  
              We provide multiple options<br></br> for controlling the blinds, including clap control and light control. 
            </p>
          </li>
          <li/>
          <li/>
          <li>
            <h1>Insert Image of final product</h1>
          </li>
        </ul>
      <div style={{ marginTop: '12%'}}></div> {/* Gap */}
        <h2 style={{fontFamily:'Brandon Grotesque, sans-serif' , textAlign:'center'}}>Why are people choosing Smart Reels?</h2>
      <div style={styles.container}>
        <div style={styles.tileContainer}>
          <ExpandableTile id="expandable-tile-1" tileCollapsedIconText="Interact to Expand tile" tileExpandedIconText="Interact to Collapse tile" style={styles.contentBox}>
            <TileAboveTheFoldContent> 
              <div style={{ height: '60px', color:'white' }}><h3>Ease of use</h3></div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ height: '20%'}}>
                <img src={Ease} alt="Your Image" style={styles.image} />
                <p>Our device is easy to install regardless of prior knowledge. Our device is modular meaning you can easily take it on and off your blinds as you choose</p>
              </div>
              <br></br>
            </TileBelowTheFoldContent>
          </ExpandableTile>
        </div>
        
        <div style={styles.tileContainer}>
          <ExpandableTile id="expandable-tile-2" tileCollapsedIconText="Interact to Expand tile" tileExpandedIconText="Interact to Collapse tile" style={styles.contentBox}>
            <TileAboveTheFoldContent> 
              <div style={{ height: '60px' , color:'white' }}><h3>Security and privacy</h3></div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ height: '20%'}}>
                <img src={Security} alt="Your Image" style={styles.image} />
                <p>Our device helps ensure privacy at your home or workspace. No more worrying about who may be snooping around your office or home when nobody is around</p>
              </div>
              <br></br>
            </TileBelowTheFoldContent>
          </ExpandableTile>
        </div>

        <div style={styles.tileContainer}>
          <ExpandableTile id="expandable-tile-3" tileCollapsedIconText="Interact to Expand tile" tileExpandedIconText="Interact to Collapse tile" style={styles.contentBox}>
            <TileAboveTheFoldContent> 
              <div style={{ height: '60px' , color:'white' }}><h3>Mobility issues</h3></div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ height: '20%'}}>
                <img src={Mobility} alt="Your Image" style={styles.image} />
                <p>Our device is designed to help the mobility challenged community of Ireland. In Ireland, over 250,000 people suffer from some sort of physical disability, which can make simple everyday tasks difficult</p>
              </div>
            </TileBelowTheFoldContent>
          </ExpandableTile>
        </div>

        <div style={styles.tileContainer}>
          <ExpandableTile id="expandable-tile-4" tileCollapsedIconText="Interact to Expand tile" tileExpandedIconText="Interact to Collapse tile" style={styles.contentBox}>
            <TileAboveTheFoldContent> 
              <div style={{ height: '60px' , color:'white' }}><h3>Insulation</h3></div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ height: '20%'}}>
                <img src={Insulation} alt="Your Image" style={styles.image} />
                <p>Our device is easy to install regardless of prior knowledge. Our device is modular meaning you can easily take it on and off your blinds as you choose</p>
              </div>
              <br></br>
            </TileBelowTheFoldContent>
          </ExpandableTile>
        </div>
      </div>
      </div>
    );
    
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 5%', // 5% padding on each side
    },
    tileContainer: {
      width: '40%', // Each tile takes up around 40% of the screen width
    },
    contentBox: {
      // borderRadius: '5px',
      // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgb(104, 198, 125)', // Default background color of the tile
      color: 'white',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

  };
export default Home;
