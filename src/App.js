import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

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

function ColorBlock(props) {
  return (
    <div
      style={{
        border: 'solid 5px #000',
        borderRadius: '15px',
        width: '300px',
        height: '300px',
        backgroundColor: props.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          fontSize: '20px',
          marginBottom: 0,
        }}
      >
        Generated color:
      </h1>
      <p style={{ fontWeight: 'bold' }}>{props.color}</p>
    </div>
  );
}
