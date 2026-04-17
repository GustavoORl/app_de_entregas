export default function LabelInput({
  label,
  id,
  type = "text",
  preview,
  ...props
}) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      {type === "file" ? (
        <>
          <input
            id={id}
            type="file"
            className="hidden"
            {...props}
          />

          <label
            htmlFor={id}
            className="cursor-pointer w-full border border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50"
          >
            Clique para selecionar uma imagem
          </label>

          {preview && (
            <img
              src={preview}
              className="w-32 h-32 object-cover rounded mt-2"
            />
          )}
        </>
      ) : (
        <input
          id={id}
          type={type}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          {...props}
        />
      )}
    </div>
  );
}