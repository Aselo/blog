import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const Warning = ({ children }) => {
  return <Card color="yellow">{children}</Card>;
};

Warning.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Warning;
