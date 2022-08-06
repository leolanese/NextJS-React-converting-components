import Link from 'next/link';

// Functional Components
export default function FirstPost() {

  const alertName = () => {
    console.log('John Doe');
  };

  return (
    <div className="container">

      <h1>First Post</h1>

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
  