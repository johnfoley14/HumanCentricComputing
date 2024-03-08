import Register from "../assets/Register";
import PropTypes from 'prop-types';
import SignIn from "../assets/SignIn";

const LoginPage = ({ handleLogin, getUsers, setUsers}) => {

    return (
        <ul style={{listStyleType: 'none', overflow: 'hidden', display: 'flex', justifyContent: 'space-evenly'}}>
            <li>
                <div>
                    <Register handleLogin={handleLogin} getUsers={getUsers} setUsers={setUsers}/>
                </div>
            </li>
            <li>
                <div>
                    <SignIn handleLogin={handleLogin} getUsers={getUsers}/>
                </div>
            </li>
        </ul>
    );
};

LoginPage.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired,
};

export default LoginPage;
