"use client";

import { useEffect, useRef, useState } from "react";


export default function LoadingScreen({children}: {children: React.ReactNode}){

    const [isLoading, setLoading]  = useState(true);


    return(
        <>
        {children}
        </>
    );
}