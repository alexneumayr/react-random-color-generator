import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorBlock from './ColorBlock';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <ColorBlock color={color} />
      <button
        style={{
          backgroundColor: '#000',
          color: 'white',
          fontSize: '18px',
          padding: '15px 20px',
          marginTop: '10px',
          width: '150px',
        }}
        onClick={() => setColor(randomColor())}
      >
        Generate
      </button>
    </div>
  );
}
