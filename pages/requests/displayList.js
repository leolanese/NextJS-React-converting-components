import Link from 'next/link';
import React, { useState } from 'react';
import data from "../../src/mockData.json";
import DisplayListMap from "./DisplayListMap";

// Functional Components
export default function DisplayList() {
  const initialValue = [
    "Star Wars", 
    "Return of the Jedi", 
    "Empire Strikes Back",
  ]

  {/* 
    Display list from harcoded component & mock data
    useState hook is deconstructed into an array with two items in it:
    The variable that holds our state (movies)
    A method that is used to update that state if you need to (setMovies)
  */}
  const [ movies, setMovies ] = useState(initialValue);
  const [ displayList, setDisplayList ] = useState(data);

  const logFirstList = () => {
    console.table(movies);
  };
  const logSecondList = () => {
    console.table(displayList);
  };

  return (
    <div className="container">

      <h1>Display list using Hook</h1>

      {/* 
       Keys are mandatory
       React uses component keys to determine which of the components in a 
       collection needs to be re-rendered instead of just re-rendering the 
       entire set of components every time anything changes.  */}

{/* 1 way: from hardcoded component */}
      {movies.map((x) => {
         return <div key={x}>
                  {x}
                </div>;
      })}

      <hr></hr>

{/* 2 way: from mock data */}
      <DisplayListMap displayList={displayList}/>

      <button onClick={logFirstList}>
        click-me
      </button>

      <button onClick={logSecondList}>
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
  