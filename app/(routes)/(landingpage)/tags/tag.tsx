'use client'
import React, { useEffect, useState } from "react";
import { TagsMobile } from "./TagsMobile";
import { Tags } from "./Tags";


export function TagComponent() {
    const [isMobile, setIsMobile] = useState(false);
    console.log("isMobile:", isMobile);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const handleResize = () => {
            console.log("Window width:", window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
            setIsMobile(mediaQuery.matches)
        };
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize);
            handleResize();
    
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);
    

    return(
        <div>
            {isMobile ? <TagsMobile /> : <Tags />}
        </div>
    )
}
