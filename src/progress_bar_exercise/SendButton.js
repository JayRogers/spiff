import React from 'react';
import styled from "styled-components"

const StyledSendButton = styled.button`
  border: 1px solid #58CEB7;
  color: #58CEB7;
  padding: 10px;
  border-radius: 18px;
  &:hover {
    border: 2px solid #58CEB7;
  }
`;

const SendButton = props =>  {
    const {status, setStatus } = props;
    
    const handleClick = () => {
        status ? setStatus(false) : setStatus(true)
    }

    return(
        <StyledSendButton disabled={status} onClick={handleClick}>
            {status ? 'Loading' : 'Start Request'}
        </StyledSendButton>
    );
}

export default SendButton;