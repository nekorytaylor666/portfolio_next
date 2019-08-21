import styled from 'styled-components';

const Anch = styled.a`
  text-decoration: none;
  position: relative;
  font-size: ${prop => prop.fontSize};
  color: ${prop => prop.color};
  cursor: pointer;
  :visited {
    text-decoration: none;
    color: ${prop => prop.color};
  }

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${prop => prop.underlineColor};
    visibility: hidden;
    border-radius: 5px;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: 0.25s linear;
    transition: 0.25s linear;
  }
  :hover:before,
  :focus:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export default Anch;
