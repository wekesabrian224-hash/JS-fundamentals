import logo from "./assets/logo.png";

//component naming
function Navigation() {
  return (
    <div className="nav">
      <img src={logo} width="60px" />
      <input placeholder="search" />
    </div>
  );
}
export default Navigation;
