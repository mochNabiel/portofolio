type SwapTextProps = {
  primary: string;
  secondary: string;
  className?: string;
};

export default function SwapText({
  primary,
  secondary,
  className = "",
}: SwapTextProps) {
  return (
    <div
      className={`group relative flex h-10 cursor-pointer items-center overflow-hidden ${className}`}
    >
      <span className="tracking-[0.15em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:rotate-3 group-hover:opacity-0">
        {primary}
      </span>

      <span className="absolute inset-0 flex translate-x-4 translate-y-4 -rotate-3 items-center justify-center tracking-[0.15em] uppercase opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
        {secondary}
      </span>
    </div>
  );
}
