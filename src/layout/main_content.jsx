// MainContent.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Word from '../game/word';
import SignUp from '../auth/signup';
import Login from '../auth/login';



export function MainContent() {
    const location = useLocation();
    return (
        <main>
            <Routes>
            <Route path="/" element={<Word />} />
            <Route path="/word" element={<Word />} />
                <Route path="/signup" element={<SignUp />} />    
                <Route path="/login" element={<Login />} />       
                
            </Routes>
        
        </main>
    );
};
export default MainContent;