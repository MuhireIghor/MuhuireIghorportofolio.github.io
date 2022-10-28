import React from 'react';
import { data } from '../Data/Projects';
import Image from 'next/image';
import Link from 'next/link';
const Projects = ()=>{
    return( 
        <div className='flex flex-col gap-12 mt-12 h-[36rem] '>
            <div className='flex flex-col items-center justify-center text-white text-xl'>Projects I've worked on so far👌😉!</div>
            <div className='flex items-center justify-center'>
                {data.map((project,index)=>{
                    return(
                        <div className='flex flex-col bg-white/30 ml-4 rounded-[12px] p-6 w-[351px] h-[405px] '>
                            <div className='flex items-center justify-center '>
                            <Link href={`${project.projectLink}`} >
                                <a>
                                    <Image src={`${project.imgUrl}`} width={400} height={400} />
                                </a> 
                                </Link>
                            </div>
                            <div className='text-white text-xl flex flex-row justify-center'>
                                {project.projectName
                                }
                            </div>
                            <div className='text-white text-md flex flex-row justify-center '>{project.projectDescription}</div>




                        </div>
                    )
                })}

            </div>

        </div>
    )
    
}
export default Projects;