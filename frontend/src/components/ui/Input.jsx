export default function Input({ type="text", color, ...props }) {
  return (
    <input
      type={type}
      className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
      {...props}
    />
  );
}