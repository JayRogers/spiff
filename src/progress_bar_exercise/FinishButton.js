import React from 'react';
import styled from "styled-components"

const StyledFinishButton = styled.button`
  margin-left: 10px;
  border: 1px solid #FC8B73;
  color: #FC8B73;
  padding: 10px;
  border-radius: 18px;
  &:hover {
    border: 2px solid #FC8B73;
  }
`;

const FinishButton = props =>  {
    const {status, setStatus} = props;
    
    const handleClick = () => {
        status ? setStatus(true) : setStatus(false)
    }

    return(
        <StyledFinishButton disabled={status} onClick={handleClick}>
            Finish Request
        </StyledFinishButton>
    );
}

export default FinishButton;