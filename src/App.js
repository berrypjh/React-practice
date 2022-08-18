import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const delay = useCallback((milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }, [])

  const handleOnClick = useCallback(async () => {
    for (let i = 0; i < 10; i++) {
      await delay(100);
      setCount(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    handleOnClick()
  }, [])
  // }, [count])

  return (
    <div className="App">
      {count}
    </div>
  );
}

export default App;
