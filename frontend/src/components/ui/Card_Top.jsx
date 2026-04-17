import { BiSearch } from "react-icons/bi";

export default function CardTop({
    title,
    subtitle,
    place,
    iconA: IconA,
    iconB: IconB,
    descB,
    iconC: IconC,
    descC,
    onClickC


}) {
    return (
        <>
            <div className="flex py-3 px-3.5 w-full bg-white justify-between rounded-lg shadow-lg border border-[#0000001f]">
                <div className="flex flex-col">
                    <p className="text-xs text-[#94A3B8]">{subtitle}</p>
                    <h1 className="text-3xl text-bold text-wrap">{title}</h1>
                </div>
                <div className="flex items-center gap-5">
                    <div className="relative w-full max-w-sm">
                        <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={20} />
                        <input className="w-full pl-10 pr-4 py-2 border border-[#0000001f] rounded-lg" type="text" placeholder={place} />
                    </div>
                    {IconA && (
                        <div className="flex items-center justify-center bg-[#FBDCDB] p-2 rounded-lg">
                            <IconA size={20} />
                        </div>
                    )}


                    {IconB && (
                        <div className="flex items-center bg-[#FBDCDB] py-2 px-3 rounded-lg gap-2">
                            <IconB size={20} />
                            <h1>{descB}</h1>
                        </div>
                    )}
                    
                    <button onClick={onClickC}>
                    {IconC && (
                        <div className="flex items-center justify-evenly gap-2 bg-white py-2 px-3 rounded-lg text-[#920602] border border-[#FBDCDB] hover:bg-[#920602] hover:text-white">
                            <IconC size={20} />
                            <h1 className="text-nowrap">{descC}</h1>
                        </div>
                    )}
                    </button>


                    
                </div>
            </div>


        </>
    )

}