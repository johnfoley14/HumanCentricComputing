import React from 'react';

const Logout = ({handleLogout }) => {
    return (
        <div>        
            <button style={{ backgroundColor: 'grey' }} onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Logout;