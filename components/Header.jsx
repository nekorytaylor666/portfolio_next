import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Power3, TimelineMax } from 'gsap';
import Link from 'next/link';
import Ham from './Ham';
import Anch from './Anch';
import Contacts from './Contacts';
import devices from '../tools/mediaQueries';

const Btn = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
  @media ${devices.mobileL} {
    justify-self: end;
  }
`;

const Title = styled.h3`
  color: ${prop => prop.color};
  font-size: 1.5rem;
  font-weight: 700;
  @media ${devices.mobileL} {
    font-size: 2.5rem;
  }
`;

const NavigationLayout = styled.div`
  z-index: 3;
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #ef3340;
  height: 0;
  overflow: hidden;
  width: 0;
  top: 0;
  left: 0;
`;

const MenuTab = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 8rem;
  color: black;
  transition: 0.4s;
  &:hover {
    color: white;
  }
  @media ${devices.mobileL} {
    font-size: 6rem;
  }
`;

const LogoLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  align-items: center;
`;

const TitleLayout = styled.div`
  width: 100%;
  z-index: 2;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  align-items: center;
  justify-content: end;
  @media ${devices.mobileL} {
    grid-template-columns: 2fr auto;
    justify-items: start;
  }
`;

const MenuLayout = styled.ul`
  list-style: none;
  opacity: 1;
  @media ${devices.mobileL} {
    align-self: center;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const Logo = styled.img`
  z-index: 0;
  height: 3rem;
`;

const ContactsLayout = styled.div`
  align-self: end;
`;

const SectionLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  padding: 6rem 3rem 3rem 3rem;
  @media ${devices.mobileL} {
    padding: 6rem 3rem 12rem 3rem;
  }
`;

const FixedContainer = styled.div`
  width: 90%;
  z-index: 4;
  position: fixed;
`;

const Header = () => {
  const navRef = useRef();
  const menuRef = useRef();
  const [displayNav, setDisplayNav] = useState(false);

  const showNavigation = () => {
    setDisplayNav(!displayNav);
    const navigation = navRef.current;
    const menuList = menuRef.current;
    const delay = 0.5;
    const tl = new TimelineMax({});
    if (!displayNav) {
      tl.to(navigation, delay, {
        height: '100vh',
        width: '100%',
        ease: Power3.easeInOut,
      });
      tl.from(menuList, delay, {
        opacity: 0,
        x: -30,
        y: -30,
        ease: Power3.easeInOut,
      });
    } else {
      tl.to(navigation, delay, {
        height: '0',
        width: '0',
        ease: Power3.easeInOut,
      });
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
  }, []);

  return (
    <Navbar>
      <FixedContainer>
        <TitleLayout>
          <LogoLayout>
            <Logo src="/static/logo_ball.png" alt="" />
            <Anch
              href="/"
              color={displayNav ? 'black' : 'white'}
              underlineColor={displayNav ? 'black' : '#ef3340'}
            >
              <Title color={displayNav ? 'black' : 'white'}>Akhmetov Toktar</Title>
            </Anch>
          </LogoLayout>
          <Btn onClick={showNavigation}>
            <Ham color={displayNav ? 'black' : 'white'} />
          </Btn>
        </TitleLayout>
      </FixedContainer>
      <NavigationLayout ref={navRef}>
        <SectionLayout>
          <MenuLayout ref={menuRef}>
            <li>
              <Link href="/about">
                <MenuTab>About me</MenuTab>
              </Link>
            </li>
            <li>
              <MenuTab href="/">lorem ipsum</MenuTab>
            </li>
            <li>
              <MenuTab href="/">lorem ipsum</MenuTab>
            </li>
            <li>
              <MenuTab href="/">lorem ipsum</MenuTab>
            </li>
          </MenuLayout>
          <ContactsLayout>
            <Contacts color="black" size="4x" width="400px" mobileWidth="200px" />
          </ContactsLayout>
        </SectionLayout>
      </NavigationLayout>
    </Navbar>
  );
};

export default Header;
