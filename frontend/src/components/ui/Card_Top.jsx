export default function CardTop({
    title, 
    subtitle, 
    place, 
    iconA:Icon,
    descA,
    iconB:Icon,
    descB,
    iconC:Icon,
    descC,

     }){

    return(
        <>
            <div className="flex py-3 px-3.5">
                <div className="flex flex-col">
                    <p className="text-xs text-[#94A3B8]">{subtitle}</p>
                    <h1 className="text-3xl text-bold">{title}</h1>
                </div>
                <div className="flex">
                    <input type="text" placeholder={place}/>
                </div>
            </div>
        
        
        </>
    )

}