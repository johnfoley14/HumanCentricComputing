import PropTypes from 'prop-types';

const NotAuthorised = ({admin}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '300px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <h2>Not Authorised</h2>
        <p>Please log in {admin} to access the content.</p>
      </div>
    </div>
  );
};

NotAuthorised.propTypes = {
  admin: PropTypes.string,
};

export default NotAuthorised;
