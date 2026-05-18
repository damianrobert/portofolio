export default function SectionHeader({
  tag,
  title,
}: {
  tag: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs mb-2 tracking-widest uppercase bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
        {tag}
      </p>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="mt-3 h-px w-16 bg-gradient-to-r from-emerald-400/60 to-blue-400/40" />
    </div>
  );
}
