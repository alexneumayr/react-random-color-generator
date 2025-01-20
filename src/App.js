import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorBlock from './ColorBlock';

export default function App() {
  const [color, setColor] = useState(randomColor()); // state of the color which is being used for the box
  const [hue, setHue] = useState(''); // contains the hue which the user types in the input field
  const [luminosity, setLuminosity] = useState(''); // contains the luminosity which the user types in the input field

  // onChange handler for the "hue" input field which sets the "hue" and "color" states accordingly
  function handleHueChange(event) {
    setHue(event.currentTarget.value);
    setColor(
      randomColor({ hue: event.currentTarget.value, luminosity: luminosity }),
    );
  }

  // onChange handler for the "luminosity" input field which sets the "hue" and "color" states accordingly
  function handleLuminosityChange(event) {
    setLuminosity(event.currentTarget.value);
    setColor(randomColor({ luminosity: event.currentTarget.value, hue: hue }));
  }

  // onClick handler for the "Generate" button which sets the "color" state
  function handleGenerateButtonClick() {
    setColor(randomColor({ luminosity: luminosity, hue: hue }));
  }

  return (
    // creates a div with the dimensions of the viewport and centers it's content
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
      {/* calls the imported Component which displays the colored box */}
      <label>
        Hue:&nbsp;
        <input value={hue} onChange={handleHueChange} />
        {/* input field for the hue */}
      </label>
      <label>
        Luminosity:&nbsp;
        <select onChange={handleLuminosityChange}>
          {/* dropdown menu for the luminosity */}
          <option value="">random</option>
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="bright">bright</option>
        </select>
      </label>
      {/* "Generate" button */}
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
