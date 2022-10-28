import Image from "next/image";
import Link from "next/link";
import { data } from "../Data/journey";
const Journey = () => {
    return (
        <div className="flex flex-col gap-8 h-[36rem] ">
            <div className="flex flex-col items-center justify-center text-white text-xl">
                My  coding jurney  until now 👌😉!
            </div>
            <div className="flex justify-center  ">
                <div className="bg-white/30 flex flex-col h-auto mx-4  p-12 rounded-[12px] ">
                    {data.map(({ achievement, skills }) => {
                        return (

                            <div className="flex flex-row">
                                <div className="flex flex-col gap-1 ">
                                    <div className="text-[gray]">{achievement.year}</div>
                                    <div className="h-16 w-1 ml-[12px] bg-[gray] "></div>
                                </div>
                                <div className="flex flex-col ml-6 mt-4">
                                    {achievement.data.map((achv) => {
                                        return (
                                            <div className="text-white ">{achv}</div>
                                        )
                                    })}

                                </div>

                            </div>
                        )
                    })}

                </div>
                <div className="flex flex-col bg-white/30 h-auto rounded-[12px] p-8 ">
                    <div className="flex flex-col gap-4 ">
                        {data.map(({ achievement, skills }) => {
                            return (
                                <>
                                    <div className="text-white font-semibold">{skills.field}</div>
                                    <div className="flex ">
                                        {skills.icons.map((icon) => {
                                            return (
                                                <Image src={`/images/${icon}`} width={40} height={40} />
                                            )
                                        })}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div>
                </div>
            </div>

        </div>
    )

}
export default Journey;