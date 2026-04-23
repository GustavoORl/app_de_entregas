import { BiSearch } from "react-icons/bi";

export default function CardTop({
    title,
    subtitle,
    place,
    iconA: IconA,
    descA,
    iconB: IconB,
    descB,
    iconC: IconC,
    descC,
    onClickA, // 🔥 ADICIONADO
    onClickC
}) {
    return (
        <div className="flex py-3 px-3.5 w-full bg-white justify-between rounded-lg shadow-lg border border-[#0000001f]">
            
            <div className="flex flex-col">
                <p className="text-xs text-[#94A3B8]">{subtitle}</p>
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>

            <div className="flex items-center gap-5">

                {/* 🔍 Busca */}
                <div className="relative w-full max-w-sm">
                    <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={20} />
                    <input 
                        className="w-full pl-10 pr-4 py-2 border border-[#0000001f] rounded-lg" 
                        type="text" 
                        placeholder={place} 
                    />
                </div>

                {/* 🗑️ Deletar */}
                {IconA && (
                    <button 
                        onClick={onClickA}
                        className="flex items-center gap-2 bg-[#FBDCDB] py-2 px-3 rounded-lg hover:bg-red-200 transition"
                    >
                        <IconA size={20} />
                        <h1>{descA}</h1>
                    </button>
                )}

                {/* ✏️ Editar (ainda sem função global) */}
                {IconB && (
                    <div className="flex items-center bg-[#FBDCDB] py-2 px-3 rounded-lg gap-2">
                        <IconB size={20} />
                        <h1>{descB}</h1>
                    </div>
                )}

                {/* ➕ Novo produto */}
                {IconC && (
                    <button 
                        onClick={onClickC}
                        className="flex items-center gap-2 bg-white py-2 px-3 rounded-lg text-[#920602] border border-[#FBDCDB] hover:bg-[#920602] hover:text-white transition"
                    >
                        <IconC size={20} />
                        <h1 className="text-nowrap">{descC}</h1>
                    </button>
                )}

            </div>
        </div>
    );
}