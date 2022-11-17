import React from 'react'
import { useLocation } from 'react-router'
// import { Link } from "react-router-dom"
import { NavList, LinkStyled } from './Navs.styled'

const LINKS = [
  {to: "/", text: "Home"},
  {to: "/starred", text: "starred"}
]

const Navs = () => {
  const location = useLocation();
  return (
    <div>
        <NavList>
          {
            LINKS.map(item => (
              <div key={item.to}>
                <li>
                  <LinkStyled
                  to = {item.to} 
                  className={item.to === location.pathname ? "active" : ""} 
                  >{item.text}</LinkStyled>
                  </li>
              </div>
            ))
          }
           
        </NavList>
    </div>
  )
}

export default Navs