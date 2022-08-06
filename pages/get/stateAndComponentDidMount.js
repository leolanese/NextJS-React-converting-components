import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// class-based React component with state to a functional component using multiple Hooks
export default function multipleHooks() {
  // instead of using the conventional state object and componentDidMount()
  // lifecycle method as you did in the class component, you used the
  // useState and useEffect Hooks.  
  const [userName, setUsername] = useState('Leo');
  const [firstName, setFirstname] = useState('Lelio');
  const [lastName, setLastname] = useState('Lanese');

  useEffect(() => {
    setInterval(() => {
        setUsername('Leo');
        setFirstname('Lelio');
        setLastname('Lanese');
      }, 5000);
  })

  const logName = () => {
    console.log(userName, firstName, lastName);
  };

  const handleUserNameInput = e => {
    setUsername({ userName: e.target.value });
  };
  const handleFirstNameInput = e => {
    setFirstname({ firstName: e.target.value });
  };
  const handleLastNameInput = e => {
    setLastname(e.target.value);
  };

  return (
    <div>
       <header>
           <h1>Adding Hooks to a Class with State and componentDidMoun</h1>
       </header>

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

      <button 
        onClick={logName} 
        className="btn btn-large right">
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
  