import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {ButtonSpin} from "@/demo/ButtonSpin.jsx";
import {Card} from "@/components/ui/card.jsx";

const url = "https://rest-api-t8pa.onrender.com/"
export function GetAPI() {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(0)

    function loadData() {
        setLoading(1);
            const timer = setTimeout(() => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        setState(data.message);
                        setLoading(2);
                    });
            }, 2000);
            return () => clearTimeout(timer);

    }
    function getValue() {

        if (loading == 1) {
            return <ButtonSpin/>
        }

        else if (loading == 0) {
            return <div className="flex items-center justify-center"><Button className='' size='lg' onClick={loadData}><h1 className='button-text py-4 flex items-center justify-center'>Load Data</h1></Button></div>
        }

       else {
            return <div className='flex justify-center'><Card className='w-1/5'><h1 className='button-text py-3 flex items-center justify-center'>Data: {state}</h1></Card></div>

            }
        }

    return (
        <div>

            {getValue()}
    </div>)

}