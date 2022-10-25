
export const blocks:background[] = [
    {intro:{
        intro:"Hello Folks, I'm",
        name:"Muhire Ighor",
        text1:"a full stack software developer, web developer , ux designer and  practicioning mobile developement and I am currently based in Rwanda.",
        text2:"I make websites and mobile apps  Iike to learn new things and I'm looking forward to work with others"
    },
    quote:{
        text2:"“I don’t sleep. I got an opportunity to make a dream become a reality. People often say I have so much energy, that I never stop; but that’s what it takes to accomplish your goals. If it ain’t making me money, making me better or making me happy… ain’t making time for it.” – 50 Cent"
    }

    }
]
interface intro{
    intro?:string;
    name?:string;
    text1?:string;
    text2:string;


}
 interface quote{
    text2:string;
}
export default interface background{
    intro:intro;
    quote:quote;
}
