import { useState } from 'react';
import '@carbon/react/scss/components/file-uploader/_index.scss';

import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free" // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: true };

const FileUploadForm = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fileDescription: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Form submitted:', formData);

    // Clear form data
    setFormData({
      name: '',
      email: '',
      fileDescription: '',
      file: null,
    });
  };

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Name:
          <br/>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br/>
        <label>
          Email:
          <br/>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />

        <label>
          File Description:
          <br/>
          <input
            type="text"
            name="fileDescription"
            value={formData.fileDescription}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />

        <label>
          Attach File:
          <br/>
          <UploadButton uploader={uploader}
                        options={options}
                        onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
            {({onClick}) =>
              <button onClick={onClick}>
                Upload a file...
              </button>
            }
          </UploadButton> </label>
        <br />
        <br/>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FileUploadForm;
