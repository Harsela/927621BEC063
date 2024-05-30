import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: 'goMart',
    clientID: 'eb8f779d-d5ab-4428-bd23-012d56ab167f',
    clientSecret: 'uUvrlhjkiNDeOAhT',
    ownerName: 'harsela',
    ownerEmail: 'harsela@abc.edu',
    rollNo: '1'
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://20.244.56.144/test/auth', formData);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data : 'Error submitting the form');
      setResponse(null);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name: </label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>
        <div>
          <label>Owner Name: </label>
          <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} />
        </div>
        <div>
          <label>Roll Number: </label>
          <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} />
        </div>
        <div>
          <label>Owner Email: </label>
          <input type="email" name="ownerEmail" value={formData.ownerEmail} onChange={handleChange} />
        </div>
        <div>
          <label>Access Code: </label>
          <input type="text" name="accessCode" value={formData.accessCode} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
