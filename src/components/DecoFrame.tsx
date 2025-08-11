import deco from "@/assets/deco-frame.svg";

export const DecoFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative rounded-2xl border bg-card p-6 ${className}`}>
    <img src={deco} alt="Moldura Art Déco prateada" className="pointer-events-none absolute inset-0 h-full w-full opacity-20" loading="lazy" />
    <div className="relative z-10">{children}</div>
  </div>
);
