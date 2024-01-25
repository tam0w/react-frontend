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
            }, 3000);
            return () => clearTimeout(timer);

    }
    function getValue() {

        if (loading == 1) {
            return <ButtonSpin/>
        }

        else if (loading == 0) {
            return <div className="m-8 flex items-center justify-center"><Button className='' size='lg' onClick={loadData}><h1 className='font text-card-foreground py-4 text-4xl flex items-center justify-center'>Load Data</h1></Button></div>
        }

       else {
            return <div className='flex justify-center'><Card className='m-8 w-1/5'><h1 className='font text-card-foreground py-4 text-4xl flex items-center justify-center'>Data: </h1><h1 className='text-secondary-foreground font py-4 text-4xl flex items-center justify-center'>{state}</h1></Card></div>

            }
        }

    return (
        <div>

            {getValue()}
    </div>)

}