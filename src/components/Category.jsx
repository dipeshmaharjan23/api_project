import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

export const Category = () => {
  return (
    <Menu>
      <Slink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={'/cuisine/Japanese'}>     
        <GiChopsticks  />
        <h4>Japanese</h4>
      </Slink>
    </Menu>
  );
};


const Menu = styled.div`
  display: flex;
justify-content:center;
gap: 50px;
`
const Slink = styled(NavLink)`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg,#494949,#313131);
  width:4.5rem;
  height:4.5rem;
  transform:scale(0.8);
  cursor:pointer;

  h4{
    color:white;
    font-size :0.8rem;

  }
  svg{
    color :white;
    font-size :1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121,#e94057);
    
    svg{
      color: white;
    }
    h4{
      color:white;
    }
  }

`
