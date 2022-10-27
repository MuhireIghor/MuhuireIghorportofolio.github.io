interface achievement{

    title?:string;
    year:number;
    data:string[];

}
interface skills{
    field:string;
    icons:string[]
}
export interface journey {
    achievement:achievement;
    skills:skills;
}