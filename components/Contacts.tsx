import React,{useState,useEffect} from 'react';
import { data } from "../Data/contacts";
import Image from "next/image";
import nodemailer from 'nodemailer';
import { log } from 'console';

const Contacts = () => {
    const [email,setMail] =useState<string | any>("");
    const [message,setMessage] = useState<string | any>("");
    const [submitted,setSubmitted] = useState<boolean>(false);

    const handleEmail = (e)=>{
        setMail(e.target.value);   
        
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value);
        console.log(message);
        
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data={
            email,message
        }
        fetch('/api/contact',{
method:"POST",
headers:{
    'Accept':'application/json,text/plain,*/*',
    'Content-Type':'application/json',
    },
body:JSON.stringify(data)

})
.then((res)=>{
    console.log("sending");
    if(res.status === 200){
        setMail("");
        setMessage("")
        setSubmitted((prev)=>!prev);
        
    }
    
})}


    return (
        <div className="flex flex-col  gap-6  justify-start">
            <div className="flex flex-col items-center justify-center text-white text-xl ">
                Contact me👌😉!
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col  items-center ">
                    {data.map((cont, index) => {
                        return (
                            <>
                                <div className="flex  ">
                                    <div>
                                        <Image src={`/images/${cont.iconUrl}`} width={20} height={20} />
                                    </div>
                                    <div className="text-white text-sm font-light">{cont.descValue}</div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="bg-white/30 w-[958px] h-[78px] rounded-[12px] flex items-center justify-start pl-12 ">
                        <input type={'text'} placeholder="Email : e.g john@doe.com" className="placeholder-[gray] border-none  outline-none bg-white/10 " value={email} onChange = {handleEmail} />
                    </div>
                        <textarea placeholder="Message" className="bg-white/10 rounded-[12px] p-5 resize-x " value={message} onChange={handleMessage}></textarea>
                    <button className="bg-[#0364BD] h-[75px] text-white rounded-[12px] ">Send Message</button>                
                </form>
            </div>
        </div>
    )
}
export default Contacts;