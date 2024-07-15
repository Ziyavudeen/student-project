import React, { useState } from 'react';
import './App.css';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <img src="https://img.icons8.com/ios-filled/50/000000/visible.png" alt="Eye Icon"/>
        </div>
        <h2>Name: Ziyavudeeen A</h2>
        <p>Registration No: 2100521</p>
        <button onClick={handleToggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            <p id='p1'>Age: 20</p>
            <p id='p2'>Department: Computer Science</p>
            <p id='p3'>Address: 1/63,Rayan Street,Chennai</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;