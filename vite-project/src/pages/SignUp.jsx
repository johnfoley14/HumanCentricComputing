import UserForm from "../assets/UserForm";

import PropTypes from 'prop-types';

const SignUpPage = ({ handleLogin, isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome to My Epic</h1>
            </div>
        );
    }
    return (
        <div>
            <UserForm handleLogin={handleLogin} />
        </div>
    );
};

SignUpPage.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};

export default SignUpPage;
