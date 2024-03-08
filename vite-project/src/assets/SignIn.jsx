import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ handleLogin, getUsers }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(getUsers());

        if(email && password) {
            const matchedUser = getUsers().find((user) => user.email === email && user.password === password);
            if (matchedUser) {
                handleLogin();
                navigate('/');
            } else {
                setErrorMessage('Invalid email or password');
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            }
        }

    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <div>
                    <label>Email:</label>
                    <br/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <br/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                    <br/>
                <button type="submit">Sign In</button>
            </form>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
};


SignIn.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    getUsers: PropTypes.func,
  };

export default SignIn;