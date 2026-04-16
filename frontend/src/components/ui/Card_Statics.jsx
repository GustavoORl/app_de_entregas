

export default function CardStatics({
  title,
  value,
  description,
  icon: Icon,
  color,
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[140px] text-[#94A3B8]">
      
      {/* Topo */}
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium">
          {title}
        </h3>

        {Icon && (
          <div className={`${color}`}>
            <Icon size={20} />
          </div>
        )}
      </div>

      {/* Valor */}
      <div className="mt-2">
        <h1 className="text-3xl font-bold text-gray-900">
          {value}
        </h1>
      </div>

      {/* Descrição */}
      <p className="text-sm mt-1">
        {description}
      </p>
    </div>
  );
}