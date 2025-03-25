export function Textarea({ ...props }) {
  return (
    <textarea
      className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
      {...props}
    />
  );
}