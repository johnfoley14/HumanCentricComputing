import PropTypes from 'prop-types';
import NotAuthorised from "../assets/NotAuthorised";
import GuiTabs from "../assets/GuiTabs";


const GuiComponents = ({isLoggedIn, getUsers, setAssignments, getAssignments, isAdmin, currentUser, setMessages, getMessages}) => {


    if (isLoggedIn) {
    return (
      <div style={{height: '110vh'}}>
        <h1>Welcome Salim</h1>

        <p>This is for you Salim</p>
        <div style={{margin:'5%'}}>
          <GuiTabs getUsers={getUsers} setAssignments={setAssignments} 
          getAssignments={getAssignments} isAdmin={isAdmin} 
          getMessages={getMessages} setMessages={setMessages}
          currentUser={currentUser}/>
        </div>
        
      </div>
      )
    }
    return <NotAuthorised admin={''}/>;
  };

GuiComponents.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
  setAssignments: PropTypes.func.isRequired,
  getAssignments: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  currentUser: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
};

export default GuiComponents;
