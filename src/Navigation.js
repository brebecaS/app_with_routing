import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/repositories/brebecaS">Repositories</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
