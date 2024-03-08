import { useState } from 'react';

const AssignmentForm = (setAssignments, getAssignments) => {
    // State variables to store form data
    const [assignmentName, setAssignmentName] = useState('');
    const [lecturer, setLecturer] = useState('');
    const [moduleTitle, setModuleTitle] = useState('');
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();

      const newAssignment = {
        assignmentName,
        lecturer,
        moduleTitle,
      };

      
      setAssignments([...getAssignments(), newAssignment]);
  
      // Log form details to console
      console.log('Assignment Name:', assignmentName);
      console.log('Lecturer:', lecturer);
      console.log('Module Title:', moduleTitle);
  
      // You can also send the data to an API or perform other actions here
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="assignmentName">Assignment Name:</label>
          <input
            type="text"
            id="assignmentName"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lecturer">Lecturer:</label>
          <input
            type="text"
            id="lecturer"
            value={lecturer}
            onChange={(e) => setLecturer(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="moduleTitle">Module Title:</label>
          <input
            type="text"
            id="moduleTitle"
            value={moduleTitle}
            onChange={(e) => setModuleTitle(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };


  export default AssignmentForm;