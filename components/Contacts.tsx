import { data } from "../Data/contacts";
import Image from "next/image";
const Contacts = () => {
    return (
        <div className="flex flex-col mt-5 gap-6">
            <div className="flex flex-col items-center justify-center text-white text-xl ">
                Contact me👌😉!
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col basis-2/4">
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
                <div className="flex flex-col">
                    <div className="bg-white/30">
                        <input type={'text'} placeholder="Email : e.g john@doe.com" className="placeholder-white" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contacts;