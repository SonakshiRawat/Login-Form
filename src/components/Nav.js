import "../App.css";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        ATools<span>.</span>
      </div>
      <div className="buttons">
        <button className="trial">Start Free Trials</button>
        <button className="login1">Login</button>
      </div>
    </div>
  );
}

export default Nav;
