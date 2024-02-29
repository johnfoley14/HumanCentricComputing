import NotAuthorised from "../assets/NotAuthorised";
import PropTypes from 'prop-types';


const Submission = ({isLoggedIn}) => {
    if (isLoggedIn) {
    return (
        <div>
            <h1>Project Submission</h1>
            <p>
                Thank you for considering our project for review. Our project aims to solve a real-world problem by leveraging cutting-edge technologies. We have put in a lot of effort and dedication to ensure the success of this project. Through this submission, we hope to showcase our skills, creativity, and problem-solving abilities. We believe that our project has the potential to make a positive impact and we are excited to present it to you.
            </p>
        </div>
    );
    }
    return <NotAuthorised />;
};

Submission.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

export default Submission;
