import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegisterForm = ({ handleLogin, getUsers, setUsers }) => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && dob && password) {
        
      const newUser = { name, email, dob, password };

      // Add the user to the list of users
      setUsers([...getUsers(), newUser]);

      // Clear the form fields
      setName('');
      setEmail('');
      setDob('');
      setPassword('');
      handleLogin();
      navigate('/');
    } else {
      // Handle form validation or show an error message
      console.error('Please fill in all fields');
    }
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit} className='centered-container-user-form'>
        <label>
          Name:
          <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <br />
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register User</button>
      </form>

    </div>
  );
};

RegisterForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired,
  };

export default RegisterForm;
