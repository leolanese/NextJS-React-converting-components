import Link from 'next/link';
import React, { useState } from 'react';

// class-based React component with state to a functional component using Hooks
export default function singleHook() {
  //  the useState Hook. It allows you to make use of state in React functional components
  //  With the useState() Hook, you can use 'state' in this functional component
  // in other words, the useState() argument is the initial value of the state.
  const [name, setName] = useState('Leo');

  const alertName = () => {
    console.log(name);
  };

  const handleNameInput = e => {
    setName(e.target.value);
  };

  return (
    <div>

      <h1>Adding Hooks to Classes with State</h1>

      <input
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Your Name"
      />

      <button onClick={alertName}>
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
  