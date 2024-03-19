import Register from "../assets/Register";
import PropTypes from 'prop-types';
import SignIn from "../assets/SignIn";
import Footer from "../assets/Footer";

const LoginPage = ({ handleLogin, getUsers, setUsers}) => {

    return (
        <div style={{minHeight: '100vh', backgroundColor:'rgb(236, 255, 230)'}}>
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
            <div style={{marginTop:'24%'}}/>
            <Footer />
        </div>
    );
};

LoginPage.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired,
};

export default LoginPage;
