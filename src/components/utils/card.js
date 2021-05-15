import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, color }) => {
  return (
    <div
      className={
        `bg-${color}-100 p-4 text-${color}-900 font-medium rounded-md border-l-8 border-${color}-400 my-4`
      }
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;
