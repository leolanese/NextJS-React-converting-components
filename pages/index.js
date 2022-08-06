import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Convert Class-based Component into Functional Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="grid">
          <div className="customHr">.z</div>
          <h2>Component: Display list + API request</h2>

          <p className="card">
            <Link href="/requests/DisplayList">
              <a>'Display.js'</a>
            </Link>
          </p>

          <p className="card">
            <Link href="/requests/RequestRemoteAPI">
              <a>'RequestRemoteAPI.js'</a>
            </Link>
          </p>
        </div>.

        <div className="grid">
          <div className="customHr">.z</div>
          <h2>Component: Class -> Functional</h2>
 
          <p className="card">
            <Link href="/get/noState">
              <a>'noState.js'</a>
            </Link>
          </p>

          <p className="card">
            <Link href="/get/singleHook">
              <a>'singleHook.js'</a>
            </Link>
          </p>

          <p className="card">
            <Link href="/get/multipleHooks">
              <a>'multipleHooks.js'</a>
            </Link>
          </p>

          <p className="card">
            <Link href="/get/stateAndComponentDidMount">
              <a>'stateAndComponentDidMount.js'</a>
            </Link>
          </p>

          <p className="card">
            <Link href="/get/stateAndComponentDidMountAndComponentDidUpdate">
              <a>'stateAndComponentDidMountAndComponentDidUpdate.js'</a>
            </Link>
          </p>
        </div>
        
      </main>

      <footer>
        
      </footer>

      <style jsx>{`
        .customHr {
          width: 100%;
          font-size: 1px;
          color: rgba(0, 0, 0, 0);
          line-height: 1px;

          background-color: grey;
          margin-top: -6px;
          margin-bottom: 10px;
        }
        
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
          background: #a7fa7b;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
