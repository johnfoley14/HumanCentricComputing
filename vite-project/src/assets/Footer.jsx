import '../styling/footer.css'

const MyFooter = () => {
    return (
      <div id='footer' style={{body:'0'}}>
        <nav style={{backgroundColor:'grey'}}>
          <ul id='parent_list'>
            <li>
              <ul className='sub_list'>
                <h3>Something</h3>
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
                <li>Email: @gmail.com</li>
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
      </div>
    );
  };
  
  export default MyFooter;
  