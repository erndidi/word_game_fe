import React from 'react';
import { Link } from 'react-router-dom';

export function LeftSidebar(){
    return (
        <nav className='flex-nav'>
       
                <ul>
                    <li><Link to="/word">Go to game</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
     
        </nav>
        
    );
}
export default LeftSidebar;