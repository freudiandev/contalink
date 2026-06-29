import { ExternalLink } from "lucide-react";
export function SourceCards({ sources }: { sources: readonly (readonly [string, string])[] }) {
  return <div className="source-grid">{sources.map(([title, href]) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>SRI · Fuente oficial</span><strong>{title}</strong><ExternalLink size={17} /></a>)}</div>;
}
