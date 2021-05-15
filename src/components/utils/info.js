import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const Info = ({ children }) => {
  return <Card color="blue">{children}</Card>;
};

Info.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Info;
