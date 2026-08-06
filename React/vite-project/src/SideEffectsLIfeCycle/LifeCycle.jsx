/*
  useEffect -> Side Effects

  Side effects include:
  - API calls
  - Timers (setTimeout, setInterval)
  - Event listeners
  - Updating the document title
  - Logging
  - Local storage

  Component Lifecycle:
  - Mount    -> Component is created and added to the DOM.
  - Update   -> Component re-renders because state or props changed.
  - Unmount  -> Component is removed from the DOM.
*/

/*
  Conditional Rendering

  A component gets rendered because it meets
  certain conditions (using if statements).
*/

/*
  useEffect Syntax

  useEffect(callback, dependencyArray)

  callback         -> Code to execute.
  dependencyArray  -> Determines when the effect runs.

  Examples:
  useEffect(() => {});        // Runs after every render.
  useEffect(() => {}, []);    // Runs only once (on mount).
  useEffect(() => {}, [n]);   // Runs whenever n changes.
*/

import { useEffect, useState } from "react";

function LifeCycle() {
  // State variable
  const [n, setN] = useState(0);

  /*
    Runs whenever the value of n changes.

    Since n is in the dependency array,
    React executes this effect after every
    update where n has a new value.
  */
  useEffect(() => {
    console.log("n has changed");
  }, [n]);

  return (
    <div>
      <div>
        {/* Decrease n by 1 */}
        <button onClick={() => setN(n - 1)}>-</button>

        {/* Display the current value */}
        <h1>{n}</h1>

        {/* Increase n by 1 */}
        <button onClick={() => setN(n + 1)}>+</button>
      </div>

      {/* Pass n as a prop */}
      <EvenOrOdd n={n} />
    </div>
  );
}

/*
  Receives n as a prop.

  If n is even, render EvenComponent.
  Otherwise, render OddComponent.
*/
function EvenOrOdd(props) {
  const { n } = props;

  if (n % 2 === 0) {
    return <EvenComponent />;
  }

  return <OddComponent />;
}

/*
  Rendered whenever n is even.
*/
function EvenComponent() {
  /*
    Empty dependency array ([])

    This effect runs only once when the
    component is mounted.
  */
  useEffect(() => {
    console.log("Even component rendered");
  }, []);

  return (
    <div>
      <h1>Even</h1>
    </div>
  );
}

/*
  Rendered whenever n is odd.
*/
function OddComponent() {
  return (
    <div>
      <h1>Odd</h1>
    </div>
  );
}

function OddComponent() {
  // Empty dependency array
  // This effect runs once when the component is mounted.
  // The returned function is a cleanup function that runs
  // when the component is unmounted (removed from the DOM).
  useEffect(() => {
    return () => {
      console.log("odd component died");
    }; // Called when the component unmounts.
  }, []);

  return (
    <div>
      <h1>Odd</h1>
    </div>
  );
}

export default LifeCycle;
