import PropTypes from 'prop-types';
import NotAuthorised from "../assets/NotAuthorised";
import GuiTabs from "../assets/GuiTabs";


const GuiComponents = ({isLoggedIn, getUsers, setAssignments, getAssignments, isAdmin, currentUser, setMessages, getMessages}) => {


    if (isLoggedIn) {
    return (
      <div style={{height: '160vh'}}>
        <h1 style={{textAlign:'center'}}>Welcome Salim</h1>

        <p style={{margin:'5%'}}>This page contains all the GUI components as part of your submission. Some key things to note is that 
          if you login as an admin you will be able to see all the users and their assignments. 
          Also if you register with a new user, they will be added to the users table. If you login to the chat using 
          different accounts you will be able to see the messages from the other accounts. 
        </p>
        <div style={{margin:'5%', backgroundColor:'white', border:'2px solid rgb(104, 198, 125)', textAlign:'center'}}>
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
