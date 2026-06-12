const rows = [
  ["Formato", "Archivo digital .P12", "Dispositivo físico USB"],
  ["Nivel de seguridad", "Alto, protegido por clave", "Alto, con control físico"],
  ["Uso recomendado", "Uso frecuente en un equipo", "Información sensible o corporativa"],
  ["Instalación", "Rápida en sistemas compatibles", "Requiere drivers compatibles"],
  ["Perfil ideal", "Profesionales y emprendedores", "Empresas y representantes legales"],
  ["Costo relativo", "Más accesible", "Mayor inversión por dispositivo"],
  ["Uso para SRI", "Sí, en sistemas compatibles", "Sí, en sistemas compatibles"],
  ["Movilidad", "Fácil de respaldar con cuidado", "Portable en el dispositivo"],
];

export function ComparisonTable() {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Característica</th><th>Archivo P12</th><th>Token USB</th></tr></thead>
        <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
