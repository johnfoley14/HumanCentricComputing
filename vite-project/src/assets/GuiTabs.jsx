import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'carbon-components-react';
import { Dashboard, Activity, CloudMonitoring,  Search,  Chat as ChatLogo } from '@carbon/icons-react';
import FileUploadForm from './Gui/FileUpload';
import Chat from './Gui/Chat';
import Joke from './Gui/joke';
import ContentManagementSystem from './Gui/CMS';
import PropTypes from 'prop-types';
import NotAuthorised from './NotAuthorised';
import '@carbon/react/scss/components/tabs/_index.scss';
import FeedbackForm from './Gui/FeedbackForm';
import SearchBar from './Gui/SearchBar';

const GuiTabs = ({getUsers, setAssignments, getAssignments, isAdmin, currentUser, getMessages, setMessages}) => {

  return (
    <Tabs>
      <TabList aria-label="List of tabs" contained>
        <Tab renderIcon={Search} secondaryLabel="(Task 3)">
          File Upload
        </Tab>
        <Tab renderIcon={Dashboard} secondaryLabel="(Task 7)">
          Content Management System
        </Tab>
        <Tab renderIcon={ChatLogo} secondaryLabel="(0/7)">
          Chat application
        </Tab>
        <Tab renderIcon={CloudMonitoring} secondaryLabel="(4/12)">
          Tell me a joke
        </Tab>
        <Tab renderIcon={Activity} secondaryLabel="(1/23)">
          Feedback Form
        </Tab>
        <Tab renderIcon={Activity} secondaryLabel="(1/23)">
          Search Pages
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
        <TabPanel>
          <Chat currentUser={currentUser} getMessages={getMessages} setMessages={setMessages}/>
        </TabPanel>
        <TabPanel>
          <Joke />
        </TabPanel>
        <TabPanel>
          <FeedbackForm />
        </TabPanel>
        <TabPanel>
          <SearchBar />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
};


GuiTabs.propTypes = {
  getUsers: PropTypes.func.isRequired,
  setAssignments: PropTypes.func.isRequired,
  getAssignments: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  currentUser: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
};

export default GuiTabs;