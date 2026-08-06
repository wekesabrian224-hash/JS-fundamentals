import { useState } from "react";

/*
  How to pass state to other components.

  Update the state if they:
  - props
  - state
*/

function ColorCircles() {
  // State to store all saved colors
  const [colors, setColors] = useState([]);

  // State to store the current color from the input
  const [color, setColor] = useState("");

  // Example of another state variable
  const [radius, setRadius] = useState("");

  // Runs when the Save button is clicked
  const onSubmit = () => {
    // Create a copy of the colors array (don't mutate state directly)
    const clonedColors = structuredClone(colors); // [...colors]

    // Add the new color to the copied array
    clonedColors.push(color);

    // Update the state with the new array
    setColors(clonedColors);
  };

  return (
    <div>
      <ColorForm color={color} setColor={setColor} onSubmit={onSubmit} />

      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  // Destructure props
  const { color, setColor, onSubmit } = props;

  return (
    <div>
      <label>Enter Color:</label>

      <input value={color} onChange={(e) => setColor(e.target.value)} />

      <button onClick={onSubmit}>Save</button>
    </div>
  );
}

function ColorList(props) {
  // Destructure props
  const { colors, setColors } = props;

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

export default ColorCircles;
