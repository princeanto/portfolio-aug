const SERVICES = ["PAN", "Aadhaar", "OCR", "Face Match", "GST", "+95 more"];

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-none text-muted-foreground"
    >
      {vertical ? <path d="M12 4v16m0 0-6-6m6 6 6-6" /> : <path d="M4 12h16m0 0-6-6m6 6-6 6" />}
    </svg>
  );
}

function Box({
  children,
  emphasis = false,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border px-4 py-3 text-center text-sm font-medium leading-snug ${
        emphasis
          ? "border-[var(--accent-a)] text-foreground"
          : "border-border bg-surface text-foreground/85"
      }`}
    >
      {children}
    </div>
  );
}

export function BusinessProblemDiagram() {
  return (
    <div className="mt-10 max-w-2xl rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:gap-4">
        <div className="flex flex-1 flex-col items-center gap-3 sm:flex-row sm:items-center">
          <Box>Customer request</Box>
          <span className="sm:hidden">
            <Arrow vertical />
          </span>
          <span className="hidden sm:block">
            <Arrow />
          </span>
          <Box>Implementation team</Box>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 py-3">
        <Arrow vertical />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {SERVICES.map((service) => (
          <Box key={service}>{service}</Box>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 py-3">
        <Arrow vertical />
      </div>

      <Box emphasis>Custom-built workflow — one-off, per deal</Box>
    </div>
  );
}
