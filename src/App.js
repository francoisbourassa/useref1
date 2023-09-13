import React, { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <header className="App-header">
        <input ref={inputRef} type="text" placeholder="Tapez quelque chose..." />
        <button onClick={focusInput}>Mettre le focus sur le champ</button>
      </header>
    </div>
  );
}

export default App;
