export default function LabelInput({
  label,
  id,
  type = "text",
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
        {...props}
      />
    </div>
  );
}