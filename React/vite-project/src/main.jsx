import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function MyComponent() {
  return null;
}

function MyComponent2() {
  return (
    <div>
      <h1>This is my second component</h1>
    </div>
  );
}

function ReactFragment() {
  return (
    <>
      <div>
        <h1>This is my second component</h1>
      </div>
      <div>
        <h1>Welcome to the React session</h1>
      </div>
    </>
  );
}
function ParentComponent() {
  return (
    <div>
      <h1>This is a parent component</h1>
      <MyComponent></MyComponent>
      <MyComponent2></MyComponent2>
      <ReactFragment></ReactFragment>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>My First React app</h1>
    <MyComponent />
    <MyComponent2></MyComponent2>
    <ReactFragment></ReactFragment>
    <ParentComponent></ParentComponent>
  </StrictMode>,
);
