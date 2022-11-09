import {useState} from 'react';
import { NextPage } from "next";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { iconsData } from "../Data/icons";
import { blocks } from "../Data/intro";
import { log } from 'console';
const Header2: FC = () => {
    const[activeLink,setActiveLink] = useState("");


    return (
        <div className="md:flex md:col md:p-0 p-6 gap-20 relative ">
            <div className="flex flex-col fixed left-2 bottom-60 gap-4 w-[40px]  p-2 rounded-xl bg-white/10   ">
                {
                    iconsData.map((icon, index) => (
                        <div key={index} className="w-4 h-4">
                  <Link href={`#${icon.linkDirection}`}>
                  <a>
                        <Image key={index} src={`/images/${icon.imgUrl}`} width={25} height={25} onClick={()=>{setActiveLink(icon.linkDirection)
                        console.log(activeLink);
                        }} className={activeLink === icon.linkDirection?"bg-white/30 rounded-full":"bg-transparent"}/>
                  </a>
                  </Link>
                        </div>
                    ))
                }
            </div>
            
            <div className="flex flex-col w-3/6 relative gap-8 left-12  md:gap-12 " id="Home">
                {
                    blocks.map(({ intro, quote }) => {
                        return (
                            <>
                                <div className="bg-white/10 rounded-[12px] flex"> 
                                <Image src={'/images/eccl.png'} width={420} height={400} alt={intro as unknown as string} /> 
                                <Image src={'/images/eccl2.png'} width={420} height={400} className="border-transparent" alt={intro as unknown as string} />
                                
                                </div>
                                <div className="flex flex-col p-2  border-xl  left-4 md:left-2  top-14 md:top-0 right-4 md:right-2 absolute z-20 gap-4  md:gap-2  ">
                                    <div className="text-md text-white"><TypewriterComponent options={{loop:true,autoStart:true,strings:[intro.intro]}} /> </div>
                                    <div className="text-xl font-bold text-white "><TypewriterComponent options={{loop:true,delay:200,autoStart:true,strings:[intro.name]}} /></div>
                                    <div className="text-sm text-[gray]  "><TypewriterComponent options={{loop:true,autoStart:true,strings:[intro.text1]}} /></div>
                                    <div className="text-sm text-[gray] "><TypewriterComponent options={{loop:true, delay:7000, autoStart:true,strings:[intro.text2]}} /></div>
                                </div>

                                <div className="flex flex-col">
                                    <div className=" bg-white/10 h-[12rem]  flex flex-row rounded-[12px]">
                                    <Image src={'/images/eccl.png'} width={420} height={400} alt={'Text1'} />
                                    <Image src={'/images/eccl2.png'} width={420} height={400} alt={'Text2'} />
                                    </div>
                                    <div className="flex flex-col p-2 border-xl absolute z-20 text-[gray]  "><TypewriterComponent options={{loop:true,autoStart:true,strings:[quote.text2]}} /> </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="flex flex-col  basis-2/6 ">
                <div className="flex justify-center">
                    <Image src='/mi.svg' width={80} height={80} alt={"me"} />
                </div>
                <div className="flex  ">
                    <div className="basis-1/4 w-[40vw] md:w-[10vw] basis-1/4 flex flex-col gap-12 -mr-4 md:mr-0">

                        <div className=" flex flex-col rounded-full w-20 h-20 bg-[gray]  items-center justify-center animate-ping  ml-4 mb-12">
                            <Image src="/images/kotlin.png" width={30} height={30} alt="kotlin" />
                        </div>
                        <div className=" flex flex-col rounded-full w-24 h-24 bg-[gray] items-center justify-center animate-ping ">
                        <Image src="/images/react.png" width={40} height={40} alt={"React"} />
                        </div>
                    </div>
                    <div className="basis-3/4 w-40vw ">
                        <Image src='/images/bg.jpg ' className='rounded-full' width={400} height={380} alt={"image"} />
                    </div>

                </div>

            </div>
        </div>
    )

}
export default Header2;