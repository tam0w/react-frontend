import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useEffect, useState} from "react";
import {CheckIcon, Cross1Icon} from "@radix-ui/react-icons";

const url = 'https://rest-api-t8pa.onrender.com/api/send'

export function PostAPI() {

    const [message, setMessage] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isComplete, setComplete] = useState(false)

    const [isnotComplete, setnotComplete] = useState(false)

    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
                setIsButtonDisabled(false)
                setMessage('')
                setComplete(false)
            }, 3000);
            return () => clearTimeout(timer); // cleanup function
        }
        else {
            const timer = setTimeout(() => {
                setIsButtonDisabled(false)
                setMessage('')
                setnotComplete(false)
            }, 3000);
            return () => clearTimeout(timer); // cleanup function
        }
    }, [isComplete]);

    function sendData() {
        setIsButtonDisabled(true)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                message: {message}
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                setComplete(true) // set isComplete to true immediately after data is sent
            })
            .catch((error) => {
                setnotComplete(true)
                console.error('Error:', error);
            });
    }


    return (
        <div className='pt-6 justify-center w-screen'>
        <div className='flex justify-center w-screen'>
            <Input className='py-8 mx-4 text-lg lg:w-1/4 sm:1/2' placeholder='Enter your message to POST.'
                   value={message} onChange={(e) => setMessage(e.target.value)}/>
            <Button className='lg:px-10' variant='secondary' size='lg' onClick={sendData} disabled={isButtonDisabled}>
                <h1 className='sm:font text-card-foreground lg:button-text'>Send Data</h1></Button>
        </div>
        {isComplete &&
            <div className='justify-center items-center flex'><CheckIcon className='w-16 h-16 text-green-400/70 py-4'/>
                <h1 className='font text-2xl text-green-200/90 py-4 -mx-2'>Data sent!</h1></div>}
        {isnotComplete && <div className='justify-center items-center flex'><Cross1Icon
            className='w-16 h-16 text-destructive/90 py-4'/> <h1
            className='font text-2xl text-destructive/60 py-4 -mx-2'>Data failed to send!</h1></div>}
    </div>)
}