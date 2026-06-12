import { Check } from "lucide-react";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge">
      <Check size={13} aria-hidden="true" />
      {children}
    </span>
  );
}
