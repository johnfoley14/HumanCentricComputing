import UserForm from "../assets/UserForm";
import PropTypes from 'prop-types';

const LoginPage = ({ handleLogin , showToast }) => {

    return (
        <div>
            <UserForm handleLogin={handleLogin} showToast={showToast} />
        </div>
    );
};

LoginPage.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    showToast: PropTypes.func.isRequired,
};

export default LoginPage;
