import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { smedia } from "../Data/media";
const Links: FC = () => {
    return (
        <div className="flex items-center fixed bottom-4 left-24 justify-start gap-6 z-30 p-4 ">
            {smedia.map((media) =>
            (
                <div className="w-12 h-12 rounded-full bg-white/30  flex flex-col items-center justify-center  background-blur-30">
                    <Link href={media.linkDetail}>
                    <a>
<Image src={`/images/${media.imgUrl}`} width={30} height={30}/>
                    </a>
                    </Link>

                </div>
            )
            )}
        </div>

    )

}
export default Links;