import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

const ProgressWrapper = styled.div`
    progress[value] {
        appearance: none;
        width: -webkit-fill-available;
    }
    progress[value]::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 2px;
        height: 6px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
    progress[value]::-webkit-progress-value {
        background-image:
             -webkit-linear-gradient(top, 
                                     rgba(255, 255, 255, .25), 
                                     rgba(0, 0, 0, .25)),
             -webkit-linear-gradient(left, #FDC582, #FC8B73);
      
          border-radius: 2px; 
          background-size: 35px 20px, 100% 100%, 100% 100%;
      }
`;

const ProgressBar = props => {
    const {value, max} = props;
    return (
        <ProgressWrapper>
          <progress value={value} max={max} />
        </ProgressWrapper>
    );
};

ProgressBar.prototype = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
};

ProgressBar.defaultProps = {
    max: 100,
};

export default ProgressBar;