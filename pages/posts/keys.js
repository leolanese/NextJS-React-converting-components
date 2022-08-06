import Link from 'next/link';
import React, { useState } from 'react';

// Functional Components
export default function FirstPost() {
  const initialValue = [
    "Star Wars", "Return of the Jedi", "Empire Strikes Back",
  ]
  {/* 
    useState hook is deconstructed into an array with two items in it:
    The variable that holds our state (movies)
    A method that is used to update that state if you need to (setMovies)
  */}
  const [ movies, setMovies ] = useState(initialValue);
 
  const alertName = () => {
    console.log(movies);
  };

  return (
    <div className="container">

      <h1>Display list using Hook</h1>

      {/* 
       Keys are mandatory
       React uses component keys to determine which of the components in a 
       collection needs to be re-rendered instead of just re-rendering the 
       entire set of components every time anything changes.  */}
      {movies.map((x) => {
         return <div key={x}>
                  {x}
                </div>;
      })}

      <button onClick={alertName}>
        click-me
      </button>

      <h2 className="title">
        Read{' '}
        <Link href="/">
          <a>Back to index.js</a>
        </Link>
      </h2>

    </div>
    
  )
}
  