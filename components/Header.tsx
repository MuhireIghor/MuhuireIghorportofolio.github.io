import { NextPage } from "next";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import { FC } from "react";
import { icons } from "../Data/icons";
import { blocks } from "../Data/intro";
const Header: FC = () => {
    return (
        <div className="flex flex-row p-6 gap-24 relative">
            <div className="flex flex-col fixed left-2  bottom-60 gap-4 w-[40px] p-2  rounded-xl bg-gray-100 opacity-10 ">
                {
                    icons.map((icon, index) => (
                        <Image key={index} src={`/images/${icon}`} width={25} height={25} />
                    ))
                }
            </div>
            
            <div className="flex flex-col  w-3/6 h-screen relative gap-8 left-12 ">
                {
                    blocks.map(({ intro, quote }) => {
                        return (
                            <>
                                <div className="bg-white/10 h-[18rem] blur-[5px]  rounded-[12px]  ">  </div>
                                <div className="flex flex-col p-2 border-xl   h-1/4 left-4  top-14 right-4 absolute z-20 gap-4  ">
                                    <div className="text- text-md text-white"><TypewriterComponent options={{loop:true,delay:500,autoStart:true,strings:[intro.intro]}} /> </div>
                                    <div className="text-xl font-bold text-white "><TypewriterComponent options={{loop:true,delay:300,autoStart:true,strings:[intro.name]}} /></div>
                                    <div className="text-sm text-[gray]"><TypewriterComponent options={{loop:true,autoStart:true,strings:[intro.text1]}} /></div>
                                    <div className="text-sm text-[gray] max-w-[400px]"><TypewriterComponent options={{autoStart:true,strings:[intro.text2]}} /></div>
                                </div>

                                <div className="flex flex-col">
                                    <div className=" bg-white/10 h-[12rem] blur-[5px] flex flex-col">

                                    </div>
                                    <div className="flex flex-col p-8 border-xl absolute z-20 text-[gray] "><TypewriterComponent options={{autoStart:true,strings:[quote.text2]}} /> </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="flex flex-col  basis-2/6 ">
                <div className="flex justify-center">
                    <Image src='/mi.svg' width={80} height={80} />
                </div>
                <div className="flex  ">
                    <div className="basis-1/4 w-[40vw] h-[40vh] basis-1/4 flex flex-col gap-12 -mr-4">

                        <div className=" flex flex-col rounded-full w-20 h-20 bg-[gray]  items-center justify-center animate-bounce z-20">
                            <Image src="/images/kotlin.png" width={30} height={30} />
                        </div>
                        <div className=" flex flex-col rounded-full w-24 h-24 bg-[gray] items-center justify-center animate-ping z-20">
                        <Image src="/images/react.png" width={40} height={40} />
                        </div>
                    </div>
                    <div className="basis-3/4 w-40vw h-40vh">
                        <Image src='/images/person.png' width={400} height={380} />
                    </div>

                </div>

            </div>
        </div>
    )

}
export default Header;