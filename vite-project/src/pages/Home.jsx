import '@carbon/react/scss/components/tile/_index.scss';
import '@carbon/react/scss/components/accordion/_index.scss';	
import '../styling/imageValues.css';
import { ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, Content, Button , Accordion, AccordionItem} from '@carbon/react';
import Insulation from '../images/Insulation.jpeg';
import Ease from '../images/EaseOfUse.jpeg';
import Mobility from '../images/Mobility.jpeg';
import Security from '../images/Security.jpeg';
import CustSatis from '../images/CustSatis.jpeg';
import Accessibility from '../images/Accessibility.jpeg';
import Value from '../images/Value.jpeg';
import Footer from '../assets/Footer'; 
import Device from '../images/IMG_1049.jpeg';

const Home = () => {
    
    return (
      <div style={{backgroundColor:'rgb(236, 255, 230)'}}>
        <ul style={{ listStyleType: 'none', overflow: 'hidden', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
          <li style={{ flex: '1', marginRight: '5%', marginLeft: '9%' }}>
            <h1 style={{ fontFamily: 'Brandon Grotesque, sans-serif' }}>The all-in-one Smart Blind<br /> you never knew you needed </h1>
            <p style={{ fontFamily: 'Brandon Grotesque, sans-serif' }}>The only modular solution that provides automation for blinds at<br /> a customer-friendly cost.
            Our product is designed to be<br />easily installed and used by anyone.
            We provide multiple options<br /> for controlling the blinds, including clap control and light control.
            </p>
            <div style={{marginTop:'15%'}}>
              <Button kind="tertiary" style={{color:'white', marginLeft:'9%', borderRadius:'20px', backgroundColor:'rgb(104, 198, 125)' , borderBlockColor:'rgb(104, 198, 125)', border: '2px solid #00b140'}}>Learn more</Button>
              <Button kind="tertiary" style={{color:'white', marginLeft:'6%', borderRadius:'20px', backgroundColor:'rgb(104, 198, 125)' , borderBlockColor:'rgb(104, 198, 125)', border: '2px solid #00b140'}}>Buy now</Button>
            </div>
          </li>
          <li style={{ flex: '1' }}>
            <img src={Device} alt="Your Image" style={{ width: '40%', height: 'auto', marginLeft:'20%'}} />
          </li>
        </ul>

      <div style={{ marginTop: '10%'}}></div>
        <h2 style={{fontFamily:'Brandon Grotesque, sans-serif' , textAlign:'center'}}>Why are people choosing Smart Reels?</h2>
      <div style={styles.container}>
        <div style={styles.tileContainer}>
          <ExpandableTile id="expandable-tile-1" tileCollapsedIconText="Interact to Expand tile" tileExpandedIconText="Interact to Collapse tile" style={styles.contentBox}>
            <TileAboveTheFoldContent> 
              <div style={{ height: '60px', color:'white', fontSize:'18px', textAlign:'center'}}><h3>Ease of use</h3></div>
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
              <div style={{ height: '60px' , color:'white', fontSize:'18px' , textAlign:'center'}}><h3>Security and privacy</h3></div>
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
              <div style={{ height: '60px' , color:'white', fontSize:'18px' , textAlign:'center'}}><h3>Mobility issues</h3></div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ height: '20%'}}>
                <img src={Mobility} alt="Your Image" style={styles.image} />
                <p>Our device is designed to help the mobility challenged community of Ireland. We want to help the 250,000 people suffering from some sort of physical disability in Ireland</p>
              </div>
              <br></br>
            </TileBelowTheFoldContent>
          </ExpandableTile>
        </div>

        <div style={styles.tileContainer}>
          <ExpandableTile id="expandable-tile-4" tileCollapsedIconText="Interact to Expand tile" tileExpandedIconText="Interact to Collapse tile" style={styles.contentBox}>
            <TileAboveTheFoldContent> 
              <div style={{ height: '60px' , color:'white' , fontSize:'18px', textAlign:'center'}}><h3>Insulation</h3></div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ height: '60%'}}>
                <img src={Insulation} alt="Your Image" style={styles.image} />
                <p>Our device is easy to install regardless of prior knowledge. Our device is modular meaning you can easily take it on and off your blinds as you choose</p>
              </div>
              <br></br>
            </TileBelowTheFoldContent>
          </ExpandableTile>
        </div>
      </div>
      <div style={{ marginTop: '12%'}}></div>
        <div style={styles.contentContainer}>
          <div style={styles.quoteContainer}>
          <Content>
            <div>
            <p style={{fontSize:'25px'}}>&quot;Wow, cool idea. Can we get a Smart Reel for our appartment after the epic?&quot;</p>
            
            <p>Dara Newsome, Second Chapter</p>
            </div>
          </Content>
          </div>
          <div style={styles.quoteContainer}>
          <Content>
            <div>
            <p style={{fontSize:'25px'}}>&quot;With my bad back I used to never bother opening and closing the blinds. Now I still don&apos;t need to!&quot;</p>
            
            <p>Conor Glynn, Goblin Clothing</p>
            </div>
          </Content>
          </div>
        </div>
        <div style={{ marginTop: '4%'}}></div>
        <div style={{textAlign:'center'}}>
          <h2>Our Company Values</h2>
          <br/>
        </div>
        <div className="image-row">
          <div className="image-item" style={{marginLeft:'15%'}}>
            <img src={CustSatis} alt="Image 1"/>
            <p style={{fontSize:'18px'}}>Customer Satisfaction</p>
          </div>
          <div className="image-item">
            <img src={Accessibility} alt="Image 2"/>
            <p style={{fontSize:'18px'}}>Accessibilty</p>
          </div>
          <div className="image-item" style={{marginRight:'15%'}}>
            <img src={Value} alt="Image 3"/>
            <p style={{fontSize:'18px'}}>Value for money</p>
          </div>
        </div>
        <div style={{ marginTop: '4%'}}></div>
        <h2 style={{fontFamily:'Brandon Grotesque, sans-serif' , textAlign:'center'}}>FAQs</h2>
        <div style={{marginLeft:'5%', marginRight:'5%', color:'white'}}>
          <Accordion style={{backgroundColor:'rgb(104, 198, 125)', color:'white'}}>
            <AccordionItem title="Why would I choose a Smart Reel device over other automated blinds?">
              <p style={{fontSize:'20px'}}>
                Our device is designed to be easily installed and used by anyone. Our device 
                can also be easily moved from window to window as the user wishes. Plus,
                there is no need to buy a new set of blinds, our device can be easily attached 
                to your existing blinds. Our device is a fraction of the cost of other automated 
                blinds on the market, without the need to pay for installation.
              </p>
            </AccordionItem>
            <AccordionItem title="What are some of the advantages of Smart Reels?">
              <p style={{fontSize:'20px'}}>
                Smart Reels are completely automatic meaning you don&apos;t even need to
                click a button on the remote for them to reel up and down. They also offer a 
                the ability to move your device from blind to blind as you want. 
              </p>
            </AccordionItem>
            <AccordionItem title="What type of information does my device send to the webpage?">
              <p style={{fontSize:'20px'}}>
                This device sends information about the current state of the blinds. This includes
                 real time data on the sound and light sensor reads. It also states whether or not 
                 your blind is currently reeled up or down and is in manual mode or not.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
        <div style={{margin:'15%'}}>
        <iframe width="840" height="472" src="https://www.youtube.com/embed/sxueMBQOE04?si=cNv5Uk5MWmz_AghK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      <Footer />
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
      width: '40%', // Each tile takes up around 40% of the screen widthflex: 1; /* Distribute remaining space equally among tiles */
      minWidth: '200px', /* Define minimum width to prevent tiles from shrinking too much */
      maxWidth: '33.33%',
    },
    contentBox: {
      backgroundColor: 'rgb(104, 198, 125)', // Default background color of the tile
      color: 'white',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    quoteContainer: {
      backgroundColor: 'rgb(104, 198, 125)',
      borderRadius: '10px',
      padding: '10px',
      margin: '5%',
      textAlign: 'center',
      color: 'white',
      width:'33%',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'row', // Arrange children horizontally
      justifyContent: 'center', // Center children horizontally
      alignItems: 'flex-start', // Align children at the top vertically
      padding: '0 5%', // 5% padding on each side
    },

  };
export default Home;
