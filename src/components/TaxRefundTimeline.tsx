export function TaxRefundTimeline({ steps }: { steps: readonly (readonly [string, string])[] }) {
  return <div className="refund-timeline">{steps.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>;
}
