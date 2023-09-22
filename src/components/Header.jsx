import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ title,src, alt }) => {
  return (
    <header>
      <h1>{title}</h1>
      <img
        className="weather-img"
        src={src}
        alt={alt}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Header;
