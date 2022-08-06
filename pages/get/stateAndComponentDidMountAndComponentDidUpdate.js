import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function App() {
  // this kind of optimise the code as:
  // we didn't have to write separate code for the componentDidMount() and
  // componentDidUpdate() functions. With the useEffect() Hook, you get the
  // functionality of both. This is because useEffect() runs both after the 
  // initial render and after every subsequent update by default
  const [header, setHeader] = useState('Leo');

  useEffect(() => {
    console.log(header);
  });

  const logName = () => {
    console.log(header);
  };

  const handleHeaderInput = e => {
    setHeader( e.target.value );
  };

  return (
    <div>
      <header>
        <h1>
          Adding Hooks to a Class with State, componentDidMount, and componentDidUpdate
        </h1>
      </header>

      <input
        type="text"
        onChange={handleHeaderInput}
        value={header}
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
  );
};

export default App;