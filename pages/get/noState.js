import React from 'react';

function App() {
  const alertName = () => {
    console.log('Leo');
  };

  return (
    <div>
      <h3>This is a Functional Component with no state</h3>
      <button onClick={alertName}>
        button
      </button>
    </div>
  );
};

export default App;