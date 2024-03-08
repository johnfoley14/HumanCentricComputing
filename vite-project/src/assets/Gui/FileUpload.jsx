import { useState } from 'react';

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, file }));

    // Clear the file input value
    e.target.value = '';
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          File Description:
          <input
            type="text"
            name="fileDescription"
            value={formData.fileDescription}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Attach File:
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt" 
            required
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FileUploadForm;
