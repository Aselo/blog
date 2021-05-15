import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex m-8 pl-6 items-baseline">
      <h1 className="text-xl mr-24 font-bold">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="flex">
        <li className="mr-6 font-semibold">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="mr-6 font-semibold">
          <Link to="/guides">Guides</Link>
        </li>
        <li className="font-semibold">
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
