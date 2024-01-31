import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useEffect, useState} from "react";
import {ChatBubbleIcon, CheckIcon, Cross1Icon, FileIcon, InfoCircledIcon, RowsIcon} from "@radix-ui/react-icons";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Separator} from "@radix-ui/react-separator";
import {Toaster} from "@/components/ui/sonner.jsx";
import {toast} from "sonner";

const url = 'https://rest-api-t8pa.onrender.com/api/send'

export function PostAPI() {

    const [message, setMessage] = useState('')
    const [sentMessage, setSentMessage] = useState([])
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isComplete, setComplete] = useState(false)
    const [isnotComplete, setnotComplete] = useState(false)

    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
                setIsButtonDisabled(false)
                setMessage('')
                setComplete(false)
                toast.success('Data has been sent!');
                setSentMessage(prevMessages => [message, ...prevMessages]) // set isComplete to true immediately after data is sent

            }, 1500);
            return () => clearTimeout(timer); // cleanup function
        }
        else {
            const timer = setTimeout(() => {
                setIsButtonDisabled(false)
                setMessage('')
                setnotComplete(false)
            }, 1500);
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
        <div className='pt-6 justify-center w-full'>
        <div className='flex justify-center w-full'>
            <Input className='py-8 mx-4 text-lg lg:w-1/4 sm:1/2' placeholder='Enter your message to POST.'
                   value={message} onChange={(e) => setMessage(e.target.value)} disabled={isButtonDisabled}/>
            <Button className='lg:px-10' variant='secondary' size='lg' onClick={sendData} disabled={isButtonDisabled}>
                <h1 className='sm:font text-card-foreground lg:button-text'>Send Data</h1></Button>
            <Toaster/>
        </div>



            <div className='flex justify-center py-6'>
            <Card className='w-2/5'>
              <CardHeader className='mb-0 pb-0'>
                  <div className='flex'>
                  <ChatBubbleIcon className='w-8 h-10'/>
                <CardTitle className='px-4'>Message Board</CardTitle>
                  </div>

                <CardDescription><p>All the messages you've sent:</p></CardDescription>
              </CardHeader>
              <CardContent className='mb-0 pb-0'>
                  <Separator/>
                    {sentMessage.map((msg, index) => (

                        <Card key={index} className='border-accent-foreground/40 w-full my-4 bg-muted-foreground/5 rounded-none hover:border-card-foreground/80'>
                                <CardContent className=''>
                                    <div className='flex'>
                                            <InfoCircledIcon className='w-8 h-8 mt-6 mr-4 text-muted-foreground'/>
                                            <h1 className='normal items-center mt-5'>{msg}</h1>
                                    </div>
                                </CardContent>
                        </Card>
                        ))}
              </CardContent>
                <CardFooter>
                <p>Dynamically updated based on current session.</p>
              </CardFooter>
            </Card>
            </div>
    </div>
    )
}