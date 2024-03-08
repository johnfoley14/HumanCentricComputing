import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = ({handleLogout , successToastOpen}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        handleLogout();
        navigate('/login');
    }



    return (
        <div style={{height: '80vh'}}>     
            <button style={{ backgroundColor: 'grey' }} onClick={handleClick}>
                Logout
            </button>
        </div>
    );
};

export default Logout;