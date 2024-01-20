import React from 'react';
import { Link } from 'react-router-dom';

export function LeftSidebar(){
  
    return (
       <React.Fragment>
             <Routes>
            <Route path="/" element={<Word />} />
            <Route path="/word" element={<Word />} />
                <Route path="/signup" element={<SignUp />} />    
                <Route path="/login" element={<Login />} />   
                <Route path="/logout" element={<Logout />} />  
            </Routes>
       </React.Fragment>
        
    );
}
export default LeftSidebar;