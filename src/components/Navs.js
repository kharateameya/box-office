import React from 'react'
import { Link } from "react-router-dom"

const Navs = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Go to homepage</Link></li>
            <li><Link to="/starred">Go to Starred</Link></li>
        </ul>
    </div>
  )
}

export default Navs