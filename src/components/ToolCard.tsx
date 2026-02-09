export default function ToolCard({ name }: { name: string }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
      {name}
    </div>
  );
}
