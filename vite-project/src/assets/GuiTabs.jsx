import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'carbon-components-react';
import { Dashboard, Activity, CloudMonitoring,  Search,  Chat, } from '@carbon/icons-react';
import FileUploadForm from './Gui/FileUpload';
import '@carbon/react/scss/components/tabs/_index.scss';

const ContainedWithSecondaryLabelsAndIcons = () => <Tabs>
    <TabList aria-label="List of tabs" contained>
      <Tab renderIcon={Search} secondaryLabel="(Task 3)">
        File Upload
      </Tab>
      <Tab renderIcon={Dashboard} secondaryLabel="(12/16)">
        Analyze
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
        {/* <form style={{
        margin: '2em'
      }}>
          <legend className={`cds--label`}>Validation example</legend>
          <Checkbox id="cb" labelText="Accept privacy policy" />
          <Button style={{
          marginTop: '1rem',
          marginBottom: '1rem'
        }} type="submit">
            Submit
          </Button>
          <TextInput type="text" labelText="Text input label" helperText="Optional help text" />
        </form> */}
      </TabPanel>
      <TabPanel>Tab Panel 3</TabPanel>
      <TabPanel>Tab Panel 4</TabPanel>
      <TabPanel>Tab Panel 5</TabPanel>
    </TabPanels>
  </Tabs>;

export default ContainedWithSecondaryLabelsAndIcons;