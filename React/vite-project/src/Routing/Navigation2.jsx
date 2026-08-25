import { useNavigate } from "react-router";

function Navigation2() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>

      <button onClick={() => navigate("/about")}>About</button>

      <button onClick={() => navigate("/crazy/route")}>Crazy Route</button>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Navigation2;
