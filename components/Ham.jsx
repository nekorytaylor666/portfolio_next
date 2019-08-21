import React from 'react';
import styled from 'styled-components';

const Ham = styled.div`
  display: block;
  width: 20px;
  div {
    height: 2px;
    background-color: ${prop => prop.color};
    margin: 4px 0;
    border-radius: 24px;
    transition: 0.3s;
    z-index: 1;
  }

  .one {
    width: 20px;
  }

  .two {
    width: 15px;
  }

  .three {
    width: 8px;
    margin: 0;
  }
  :hover div {
    width: 20px;
  }
`;

const Header = props => {
  const { color } = props;

  return (
    <Ham color={color}>
      <div className="one" />
      <div className="two" />
      <div className="three" />
    </Ham>
  );
};

export default Header;
