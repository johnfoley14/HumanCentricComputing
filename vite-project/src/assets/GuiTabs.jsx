import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'carbon-components-react';
import { Dashboard, Activity, CloudMonitoring,  Search,  Chat, } from '@carbon/icons-react';
import FileUploadForm from './Gui/FileUpload';
import ContentManagementSystem from './Gui/CMS';
import PropTypes from 'prop-types';
import NotAuthorised from './NotAuthorised';
import '@carbon/react/scss/components/tabs/_index.scss';

const GuiTabs = ({getUsers, setAssignments, getAssignments, currentUser}) => {

  console.log('In GUI Tabs');
  console.log(currentUser);
  const isAdmin = true;


  return (
    <Tabs>
      <TabList aria-label="List of tabs" contained>
        <Tab renderIcon={Search} secondaryLabel="(Task 3)">
          File Upload
        </Tab>
        <Tab renderIcon={Dashboard} secondaryLabel="(Task 7)">
          Content Management System
        </Tab>
        <Tab renderIcon={Activity} secondaryLabel="(0/7)">
          Remediate
        </Tab>
        <Tab renderIcon={CloudMonitoring} secondaryLabel="(4/12)">
          Assets
        </Tab>
        <Tab renderIcon={Chat} secondaryLabel="(1/23)">
          Monitoring
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FileUploadForm />
        </TabPanel>
        <TabPanel>
        {isAdmin
        ? <ContentManagementSystem getUsers={getUsers} setAssignments={setAssignments} getAssignments={getAssignments}/>
        : <NotAuthorised admin={'as admin'}/>
        }
        </TabPanel>
        <TabPanel>Tab Panel 3</TabPanel>
        <TabPanel>Tab Panel 4</TabPanel>
        <TabPanel>Tab Panel 5</TabPanel>
      </TabPanels>
    </Tabs>
  )
};


GuiTabs.propTypes = {
  getUsers: PropTypes.func.isRequired,
  setAssignments: PropTypes.func.isRequired,
  getAssignments: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default GuiTabs;