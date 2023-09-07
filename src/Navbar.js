import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom"
const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 20px 50px;
  z-index: 15;
  justify-content: center;

  li {
    padding: 18px 30px;
    

  }
  
  @media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    background: #1565df;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    color: #fff;
    transition: all 0.5s linear;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
  }
`;
    

const Navbar = ({open})=> {
    return (
      <div>
        <Ul open={open}>
          <li>
            <Link to="https://sanjesh.org">Home</Link>
          </li>
          <li>
            <Link>Docs</Link>
          </li>
          <li>
            <Link>Buy</Link>
          </li>
          <li>
            <Link>Github</Link>
          </li>
        </Ul>
      </div>
    );
}

export default Navbar;