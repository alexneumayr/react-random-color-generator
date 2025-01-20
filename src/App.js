import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorBlock from './ColorBlock';

export default function App() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('');

  function handleHueChange(event) {
    setHue(event.currentTarget.value);
    setColor(
      randomColor({ hue: event.currentTarget.value, luminosity: luminosity }),
    );
  }

  function handleLuminosityChange(event) {
    setLuminosity(event.currentTarget.value);
    setColor(randomColor({ luminosity: event.currentTarget.value, hue: hue }));
  }

  function handleGenerateButtonClick() {
    setColor(randomColor({ luminosity: luminosity, hue: hue }));
  }

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
      <label>
        Hue:&nbsp;
        <input value={hue} onChange={handleHueChange} />
      </label>
      <label>
        Luminosity:&nbsp;
        <select onChange={handleLuminosityChange}>
          <option value="random">random</option>
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="bright">bright</option>
        </select>
      </label>
      <button
        style={{
          backgroundColor: '#000',
          color: 'white',
          fontSize: '18px',
          padding: '15px 20px',
          marginTop: '10px',
          width: '150px',
        }}
        onClick={handleGenerateButtonClick}
      >
        Generate
      </button>
    </div>
  );
}
