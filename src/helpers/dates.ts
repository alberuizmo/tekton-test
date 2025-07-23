export const formatStarWarsDate = (birth: string): string => {
  if (!birth || birth === "unknown" || birth.trim() === "") {
    return "Desconocido";
  }

  const match = birth.match(/^([\d.]+)(BBY|ABY)$/i);
  if (!match) {
    return birth;
  }
  const value = parseFloat(match[1]);
  const era = match[2].toUpperCase();

  if (era === "BBY") {
    return `Hace ${value} años antes de la Batalla de Yavin`;
  }
  return `${value} años después de la Batalla de Yavin`;
};
