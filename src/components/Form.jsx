import React, { useState } from 'react';

function Form({onSubmit}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email }); //this will call handleFormSubmit in App.jsz
    console.log("Form " , {name, email }) ;
    setName('');
    setEmail('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          placeholder="Enter  name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
} //Form

export default  Form ;

