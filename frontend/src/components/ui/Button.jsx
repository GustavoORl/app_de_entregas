export default function Button({ children, ...props }) {
  return (
    <button
      className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}