import React, { useState, useEffect } from 'react';

export function Update(props){
    const[score,setScore]=useState(0);

    useEffect(() => {
        setScore(props.attempt);   
    }, [props.attempt]);

    return(
        <div>
           
        </div>
    );
};

export default Update