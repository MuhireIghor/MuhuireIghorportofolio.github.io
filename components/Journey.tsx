import Image from "next/image";
import { data } from "../Data/journey";
const Journey = () => {
    return (
        <div className="flex flex-col gap-4 justify-center ">
            {data.map(({ achievement, skills }) => {
                return (
                    <>
                        <div className="flex flex-col">
                            {achievement.title}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <div className="flex ">
                                    <div className="flex flex-col">
                                        <div>{achievement.year}</div>
                                        <div className="flex flex-col w-30 h-30 rounded-full bg-[gray]"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        {achievement.data.map((info) => (
                                            <div>{info}</div>
                                        )
                                        )}


                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col ">
                                <div className="flex flex-col">
                                    <div>{skills.field}</div>
                                    <div className="flex flex-row">{skills.icons.map((icon) => (
                                        <Image src={`/images/${icon}`} width={20} height={20} />
                                    ))}</div>

                                </div>
                            </div>

                        </div>
                    </>
                )

            })}

        </div>
    )
}
export default Journey;