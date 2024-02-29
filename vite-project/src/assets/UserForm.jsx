import { useState } from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';
import { useNavigate } from 'react-router-dom';



const UserForm = ({handleLogin}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dob: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, such as sending data to a server

    // For demonstration purposes, log the form data to the console
    handleLogin();
    navigate('/');
    console.log(formData);
  };

  return (
    <div className='centered-container-user-form'>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit} className='centered-container-user-form'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


UserForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default UserForm;
