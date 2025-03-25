export function Button({ children, ...props }) {
  return (
    <button
      className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-pink-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}