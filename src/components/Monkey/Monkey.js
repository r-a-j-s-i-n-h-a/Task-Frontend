import React, { useState } from 'react';
// import './ResponsiveForm.css';
import './Monkey.css'
const Monkey = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    business: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="input-row">
          <label>First Name:  </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <label>  Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-row">
          <label>Email:  </label>
          <input
            type="email"
            name="email"
            className='bb'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-row">
          <label>Business:  </label>
          <input
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
          />
           <label>  Phone No. :  </label>
          <input
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
          />
          <br></br>
          <button className='btn1'>Submit</button>
        </div>
        <h5>The personal data collected will be used by EsaLink to process the requests made and/or manage the services requested. You can exercise your rights of access, rectification, opposition and portability of your data in accordance with the provisions stipulated in the confidentiality policy.</h5>
      </div>

      <div className="additional-data">
        {/* Display additional data on the right side */}
        <div>
          <h4>A QUESTION? A PROJECT?</h4>
          <h2>Enter your contact details to be quickly contacted by a specialist</h2>
          {/* Add your additional data here */}
          <h4>We are here to advise you on all your dematerialization projects.</h4>
        </div>
      </div>
    </div>
  );
};

export default Monkey;
