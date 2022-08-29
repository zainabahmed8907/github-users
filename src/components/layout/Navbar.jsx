import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral-800 text-sky-400">
      <div className="container mx-auto">
        <div className="flex px-2 mx-2 p-3">
          <div className="flex-1">
            <FaGithub className="inline pr-2 text-3xl" />
            <Link
              to="/"
              className="inline-block text-lg font-bold align-middle"
            >
              {title}
            </Link>
          </div>
          <div className="flex-1">
            <div className="flex justify-end space-x-5">
              <Link
                to="/"
                className="btn btn-ghost btn-sm rounded-btn font-bold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="btn btn-ghost btn-sm rounded-btn font-bold"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
