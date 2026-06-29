import { comparisonRows } from "@/data/prices";

export function ComparisonTable() {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Característica</th><th>P12 / Nube</th><th>Token USB</th></tr></thead>
        <tbody>{comparisonRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
