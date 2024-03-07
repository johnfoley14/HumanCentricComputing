import UserForm from "../assets/UserForm";
import PropTypes from 'prop-types';

const LoginPage = ({ handleLogin}) => {

    return (
        <div>
            <UserForm handleLogin={handleLogin}/>
        </div>
    );
};

LoginPage.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default LoginPage;
