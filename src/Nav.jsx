import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/GroupedTeamMembers">
            <h1>Teams</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
