import PropTypes from 'prop-types';
import NotAuthorised from "../assets/NotAuthorised";
import GuiTabs from "../assets/GuiTabs";


const GuiComponents = ({isLoggedIn, getUsers, setAssignments, getAssignments}) => {


    if (isLoggedIn) {
    return (
      <div style={{height: '110vh'}}>
        <h1>Welcome Salim</h1>

        <p>This is for you Salim</p>

        <GuiTabs getUsers={getUsers} setAssignments={setAssignments} getAssignments={getAssignments}/>
        
      </div>
      )
    }
    return <NotAuthorised />;
  };

GuiComponents.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
  setAssignments: PropTypes.func.isRequired,
  getAssignments: PropTypes.func.isRequired,
};

export default GuiComponents;
