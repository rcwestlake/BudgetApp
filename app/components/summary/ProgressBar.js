import React, { PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({

});

const ProgressBar = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width}
      ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect fill="#D0011B" x={0} y={0} width={width / 2} height={height} />
        <rect fill="#50E3C2" x={width / 2} y={0} width={width / 2} height={height} />
      </g>
    </svg>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ProgressBar;
