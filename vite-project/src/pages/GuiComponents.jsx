import PropTypes from 'prop-types';
import NotAuthorised from "../assets/NotAuthorised";
import GuiTabs from "../assets/GuiTabs";


const GuiComponents = ({isLoggedIn}) => {


    if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome Salim</h1>

        <p>This is for you Salim</p>

        <GuiTabs />
        
      </div>
      )
    }
    return <NotAuthorised />;
  };

GuiComponents.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default GuiComponents;
