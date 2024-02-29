import PropTypes from 'prop-types';
import NotAuthorised from "../assets/NotAuthorised";

const Home = ({isLoggedIn}) => {
    if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome to My Epic</h1>
      </div>
      )
    }
    return <NotAuthorised />;
  };

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Home;
