import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const Danger = ({ children }) => {
  return <Card color="red">{children}</Card>;
};

Danger.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Danger;
