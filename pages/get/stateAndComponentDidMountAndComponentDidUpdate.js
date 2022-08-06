import React, { useState, useEffect } from 'react';

function App() {
  // you did not have to write separate code for the componentDidMount() and
  // componentDidUpdate() functions. With the useEffect() Hook, you get the
  // functionality of both. This is because useEffect() runs both after the 
  // initial render and after every subsequent update by default.
  const [header, setHeader] = useState('Leo');

  useEffect(() => {
    const newheader = document.querySelectorAll('#header')[0];
    setTimeout(() => {
      newheader.innerHTML = header;
    }, 2000);
  });

  const handleHeaderInput = e => {
    setHeader(e.target.value);
  };

  return (
    <div>
      <h1 id="header">Adding Hooks to a Class with State, componentDidMount, and componentDidUpdate</h1>

      <input
        type="text"
        onChange={handleHeaderInput}
        value={header}
      />
    </div>
  );
};

export default App;