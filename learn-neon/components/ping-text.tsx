interface PingTextProps {
  children: React.ReactNode;
}



export default function PingText({
  children,
}: PingTextProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="relative h-2 w-2">
        <span className="bg-primary absolute inset-0 animate-ping rounded-full" />
        <span className="bg-primary absolute inset-0 rounded-full" />
      </div>

      <h2 className="font-medium text-sm lg:text-base tracking-[0.2em] uppercase">
        {children}
      </h2>
    </div>
  );
}