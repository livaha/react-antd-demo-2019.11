import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (<div className="sider">
        <ul>
          <Link to="/"><li>React Hook Movie</li></Link>

          <Link to="/router"><li>Router</li></Link>
          
          <Link to="/list"><li>List</li></Link>
          
          <Link to="/hook"><li>React Hook Demo</li></Link>
        </ul>
  </div>
  );
}

export default Nav;
