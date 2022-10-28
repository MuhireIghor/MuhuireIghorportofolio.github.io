import { data } from "../Data/contacts";
import Image from "next/image";
const Contacts = () => {
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
                <div className="flex flex-col gap-4">
                    <div className="bg-white/30 w-[958px] h-[78px] rounded-[12px] flex items-center justify-start pl-12 ">
                        <input type={'text'} placeholder="Email : e.g john@doe.com" className="placeholder-[gray] border-none  outline-none bg-white/10   " />
                    </div>
                        <textarea placeholder="Message" className="bg-white/10 rounded-[12px] p-5 resize-x "></textarea>
                    <button className="bg-[#0364BD] h-[75px] text-white rounded-[12px] ">Send Message</button>                
                </div>
            </div>
        </div>
    )
}
export default Contacts;