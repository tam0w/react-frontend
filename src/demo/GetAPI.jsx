import {useEffect, useState} from "react";
import {cn} from "@/lib/utils.js";

export function GetAPI() {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setState(JSON.stringify(data)), setLoading(false))
    }, []);

    function getValue() {

        if (loading) {
            return (<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin")}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>)
        }

        return (
            <div>
                <h1 className='based'>{state}</h1>
            </div>
        )
    }

    const url = "https://rest-api-t8pa.onrender.com/"


    return (
        <p>{getValue}</p>
    )
}