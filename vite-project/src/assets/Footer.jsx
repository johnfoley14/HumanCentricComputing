import '../styles/footer.css'

const MyFooter = () => {
    return (
      <nav id='footer' >
        <ul id='parent_list'>
          <li>
            <ul className='sub_list'>
              <h3>GreenHurls</h3>
              <li>Castle</li>
              <li>Earth</li> 
              <li>12345</li>
              <li>12345</li>
            </ul>
          </li>
          <li>
            <ul className='sub_list'>
              <h3>Contact</h3>
              <li>Phone: +123 456 789</li>
              <li>Email: greenhurls@greenhurls.com</li>
            </ul>
          </li>
          <li>
            <ul className='sub_list'>
              <h3>Socials</h3>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default MyFooter;
  