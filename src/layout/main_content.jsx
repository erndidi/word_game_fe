// MainContent.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Word from '../game/word';
import SignUp from '../auth/signup';
import Login from '../auth/login';
import Logout from '../auth/logout';



export function MainContent() {
    const location = useLocation();
    return (
        <article className='flex-article'>
          
        
        </article>
    );
};
export default MainContent;