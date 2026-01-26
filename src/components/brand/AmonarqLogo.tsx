interface AmonarqLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function AmonarqLogo({ className = "", showWordmark = true }: AmonarqLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract Logo Mark - Represents continuity and flow */}
      <img
        src="/logo.png"
        alt="Amonarq Logo"
        className="h-full w-auto object-contain"
      />


    </div>
  );
}

export function MynxtLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <defs>
          <linearGradient id="mynxtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(142 71% 45%)" />
            <stop offset="100%" stopColor="hsl(199 89% 60%)" />
          </linearGradient>
        </defs>
        {/* M shape with flowing continuity design */}
        <path
          d="M6 28 L6 10 L13 20 L18 10 L23 20 L30 10 L30 28"
          stroke="url(#mynxtGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Underline representing next/forward motion */}
        <path
          d="M8 32 L28 32"
          stroke="url(#mynxtGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-semibold text-foreground tracking-tight text-lg">
        MyNxt
      </span>
    </div>
  );
}
