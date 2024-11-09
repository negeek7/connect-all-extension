import { useState } from 'react';
import reactLogo from '@/src/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div>Hello World</div>
        <button onClick={() => setCount(prev => prev + 1)}>Count is {count}</button>
    </>
  );
}

export default App;
