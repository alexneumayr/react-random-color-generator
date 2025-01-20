import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div>
      <ColorBlock color={color} />
    </div>
  );
}

function ColorBlock(props) {
  return (
    <div>
      <h1>Generated color:</h1>
      <p>{props.color}</p>
    </div>
  );
}
