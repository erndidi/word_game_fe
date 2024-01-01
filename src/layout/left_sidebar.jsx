import React from 'react';
import { Link } from 'react-router-dom';

export function LeftSidebar(){
    return (
        <div className="sidebar-1">
       
                <ul>
                    <li><Link to="/word">Go to game</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
     
        </div>
        
    );
}
export default LeftSidebar;