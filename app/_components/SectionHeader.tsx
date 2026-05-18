export default function SectionHeader({
  tag,
  title,
}: {
  tag: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-cyan-400 text-xs mb-2 tracking-widest uppercase">
        {tag}
      </p>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="mt-3 h-px w-16 bg-cyan-400/40" />
    </div>
  );
}
