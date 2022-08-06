import Link from 'next/link';
import React, { useState } from 'react';

// class-based React component with state to a functional component using multiple Hooks
export default function multipleHooks() {
  // If we have two or more input fields for userName, firstName, and lastName, 
  // then you would have a class-based component with three state properties
  const [userName, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');

  const logName = () => {
    console.log(userName, firstName,lastName );
  };

  const handleUserNameInput = e => {
    setUsername(e.target.value);
  };
  const handleFirstNameInput = e => {
    setFirstname(e.target.value);
  };
  const handleLastNameInput = e => {
    setLastname(e.target.value);
  };

  return (
    <div>
      <headear>
        <h1>Adding Hooks to Classes with Multiple State Properties</h1>
      </headear>

      <input
        type="text"
        onChange={handleUserNameInput}
        value={userName}
        placeholder="Your Username"
      />
      <input
        type="text"
        onChange={handleFirstNameInput}
        value={firstName}
        placeholder="Your First Name"
      />
      <input
        type="text"
        onChange={handleLastNameInput}
        value={lastName}
        placeholder="Your Last Name"
      />

      <button onClick={logName}>
        click-me
      </button>

      <h2 className="title">
        <Link href="/">
          <a>Back to index.js</a>
        </Link>
      </h2>

    </div>
    
  )
}
  