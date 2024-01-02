// MainContent.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Word from '../game/word';
import SignUp from '../auth/signup';



export function MainContent() {
    const location = useLocation();
    return (
        <main className='flex-main'>
            <article className='flex-article'>
                <Routes>
                    <Route path="/" element={<Word />} />
                    <Route path="/word" element={<Word />} />
                    <Route path="/signup" element={<SignUp />} />

                </Routes>
            </article>


        </main>
    );
};
export default MainContent;