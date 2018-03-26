import Icon from "react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import "./LeftPanel.css";
import Filters from "./Filters";
import ScrollingView from "./ScrollingView";

const ExpandStyle = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 50%;
  padding-right: 7px;
  padding-left: 7px;
  padding-top: 1px;
  padding-bottom: 1px;
  background: lightgray;
  transition: all 0.5s ease;
  &:hover {
    background: darkgray;
  }
`;

const ExpandButton = ({ onClick, expanded }) => (
  <ExpandStyle onClick={onClick}>
    <Icon name={expanded ? "chevron-left" : "chevron-right"} />{" "}
  </ExpandStyle>
);

ExpandButton.propTypes = {
  onClick: PropTypes.func,
  expanded: PropTypes.bool.isRequired
};

ExpandButton.defaultProps = {
  onClick: () => null
};

const LeftPanel = ({ toggleExpand, expanded }) => (
  <div className="left-panel" style={{ padding: "10px", height: "100%" }}>
    <ExpandButton expanded={expanded} onClick={toggleExpand} />
    <Filters />
    <ScrollingView />
  </div>
);

LeftPanel.propTypes = {
  toggleExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired
};

export default LeftPanel;
