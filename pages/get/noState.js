import React from 'react';
import Link from 'next/link';

function App() {
  const alertName = () => {
    console.log('Leo');
  };

  return (
    <div>
      <header>
        <h1>This is a Functional Component with no state</h3>
      </header>

      <button onClick={alertName}>
        button
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