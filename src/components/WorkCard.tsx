export default function WorkCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-indigo-500">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
    </div>
  );
}
