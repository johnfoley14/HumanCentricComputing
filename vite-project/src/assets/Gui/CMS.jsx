import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "@carbon/react";
import props from 'prop-types';
import { useState } from "react";
import '@carbon/react/scss/components/data-table/_index.scss';

const ContentManagementSystem = ({getUsers, setAssignments, getAssignments}) => {

      const filterPassword = (user) => {
        // eslint-disable-next-line no-unused-vars
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      };


    const usersHeaders = ['Name', 'Email', 'Dob', 'Role'];
    const assignmentHeaders = ['Assignment', 'Lecturer', 'Module Title'];
    return (
    <div>
        <label style={{}}>User Table</label>
        <br></br>
        <br></br>
        <Table size="lg" useZebraStyles={false} aria-label="sample table">
            <TableHead>
            <TableRow>
                {usersHeaders.map(header => <TableHeader id={header.key} key={header}>
                    {header}
                </TableHeader>)}
            </TableRow>
            </TableHead>
            <TableBody>
                {getUsers().map((user) => (
                <TableRow key={user.email}>
                    {Object.keys(filterPassword(user)).map((key) => (
                    <TableCell key={key}>{user[key]}</TableCell>
                    ))}
                </TableRow>
                ))}
            </TableBody>
        </Table>
        <br></br>
        <br></br>
        <label style={{}}>Assignments Table</label>
        <br></br>
        <br></br>
        <Table size="lg" useZebraStyles={false} aria-label="sample table">
            <TableHead>
            <TableRow>
                {assignmentHeaders.map(header => <TableHeader id={header.key} key={header}>
                    {header}
                </TableHeader>)}
            </TableRow>
            </TableHead>
            <TableBody>
                {getAssignments().map((assignment) => (
                <TableRow key={assignment.assignmentName}>
                    {Object.keys(assignment).map((key) => (
                    <TableCell key={key}>{assignment[key]}</TableCell>
                    ))}
                </TableRow>
                ))}
            </TableBody>
        </Table>
        <br></br>
        <br></br>
        <AssignmentForm setAssignments={setAssignments} getAssignments={getAssignments}/>
    </div>
    );
  };

const AssignmentForm = ({setAssignments, getAssignments}) => {
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
          <br></br>
          <input
            type="text"
            id="assignmentName"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lecturer">Lecturer:</label>
          
        <br></br>
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



  ContentManagementSystem.propTypes = {
    getUsers: props.func.isRequired,
    setAssignments: props.func.isRequired,
    getAssignments: props.func.isRequired,
  };

  AssignmentForm.propTypes = {
    setAssignments: props.func.isRequired,
    getAssignments: props.func.isRequired,
  };

export default ContentManagementSystem;