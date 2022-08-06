import Link from 'next/link';
import React, { useState } from 'react';
import data from "../../src/mockData.json";
import ToDoList from "./ToDoList";

// Functional Components
export default function FirstPost() {
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
  const [ toDoList, setToDoList ] = useState(data);

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

      <hr></hr>

      <ToDoList toDoList={toDoList}/>

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
  