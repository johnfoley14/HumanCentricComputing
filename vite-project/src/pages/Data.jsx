import NotAuthorised from "../assets/NotAuthorised";
import PropTypes from 'prop-types';
import { getLightReading, getSoundReading } from "../store/data";


const Submission = ({isLoggedIn}) => {

    const light = getLightReading();
    const sound = getSoundReading();

    if (isLoggedIn) {
    return (
        <div style={{height: '80vh'}}>
            <h1>Project Submission</h1>
            <p>
                Thank you for considering; Light Reading: {light} Sound Reading: {sound}
            </p>
        </div>
    );
    }
    return <NotAuthorised admin={''}/>;
};

Submission.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

export default Submission;
