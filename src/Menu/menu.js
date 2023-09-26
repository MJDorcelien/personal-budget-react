import {
  Link
} from "react-router-dom";

function Menu() {
  return (
    <div class="menu">
      <nav>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about.html">About</Link></li>
            <li><Link to="/login.html">Login</Link></li>
        </ul>
        <button>Report an Error</button>
      </nav>
    </div>
  );
}

export default Menu;
