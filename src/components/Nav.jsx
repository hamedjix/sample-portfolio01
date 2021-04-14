import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          JIX's Photography
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About Us</Link>
        </li>
        <li>
          <Link to='/work'>Our Work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: 'lobster', cursive;
  }
`;
export default Nav;
