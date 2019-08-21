import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faBehanceSquare,
  faTelegramPlane,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import devices from '../tools/mediaQueries';

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};

  @media ${devices.mobileL} {
    width: ${props => props.mobileWidth};
  }
`;

const Contacts = props => {
  const { color, size, width, mobileWidth } = props;
  return (
    <ContactList width={width} mobileWidth={mobileWidth}>
      <li>
        <a href="https://www.instagram.com/akmt_dev/">
          <FontAwesomeIcon size={size} color={color} icon={faInstagram} className="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/akmt_dev/">
          <FontAwesomeIcon size={size} color={color} icon={faBehanceSquare} className="icon" />
        </a>
      </li>
      <li>
        <a href="https://t.me/akmt_dev">
          <FontAwesomeIcon size={size} color={color} icon={faTelegramPlane} className="icon" />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/тохтар-ахметов-51988b17b">
          <FontAwesomeIcon size={size} color={color} icon={faLinkedin} className="icon" />
        </a>
      </li>
    </ContactList>
  );
};

export default Contacts;
