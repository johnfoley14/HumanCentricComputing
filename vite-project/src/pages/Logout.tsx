import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../assets/Footer';


const Logout = ({handleLogout , successToastOpen}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        handleLogout();
        navigate('/login');
    }



    return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh', // Set the height of the container to 80% of the viewport height
        }}>
        <button style={{ backgroundColor: 'rgb(104, 198, 125)' , width:'10%', height:'8%', color:'white', fontSize:'20px'}} onClick={handleClick}>
          Logout
        </button>
      </div>
      <Footer />
      </div>
    );
};

export default Logout;