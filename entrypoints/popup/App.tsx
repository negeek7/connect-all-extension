import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div>Hello World</div>
        <button onClick={() => setCount(prev => prev + 1)}>Count is {count}</button>
        <a href="https://www.linkedin.com" target={"_blank"}>Open linkedin</a>
    </>
  );
}

export default App;
