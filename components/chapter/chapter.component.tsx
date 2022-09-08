import { FC, Fragment, useEffect } from "react";
import Verse from "../verse/verse.component";

interface P {
    slug: string | string[] | undefined
}

const Chapter:FC<P> = ({slug})=>{

    useEffect(() => {  
        console.log("ooops!");
        console.log(slug);
    },[]); 

    
    return(
        <Verse/>
    );
}
export default Chapter;