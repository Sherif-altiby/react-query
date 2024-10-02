import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="link">
        <Link to={"/"}> Home </Link>
      </div>
      <div className="link">
        <Link to={"/posts"}> Posts </Link>
      </div>
      <div className="link">
        <Link to={"/comments"}> Comments </Link>
      </div>
      <div className="link">
        <Link to={"/users"}> Users </Link>
      </div>
    </div>
  );
};

export default Nav;
