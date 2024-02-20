const NotAuthorised = () => {
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
        <p>Please log in to access the content.</p>
      </div>
    </div>
  );
};

export default NotAuthorised;
