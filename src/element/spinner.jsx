import React from "react";
import { MoonLoader } from "react-spinners";
export function Spinner(){

 return(
    <React.Fragment>
            <MoonLoader
                color="#2196F3"
                size={150}
                aria-label="Loading Spinner"          
            
            >


            </MoonLoader>

    </React.Fragment>
 )

}