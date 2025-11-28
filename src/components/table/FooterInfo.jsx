export default function FooterInfo({ total, selected }) {
  return (
    <div className="p-3 text-sm text-gray-700">
      Showing {total} candidates | Selected: {selected}
    </div>
  );
}
