export function converterDataISOParaInput(isoString: string): string {
    const data = new Date(isoString);
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia}`; // formato aceito por <input type="date">
  }

export function converterDataInputParaISO(dataInput: string | null | undefined): string | undefined {
  if (!dataInput) return undefined;

  const date = new Date(dataInput);
  // Corrige o fuso local (por exemplo, UTC-3)
  const corrected = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return corrected.toISOString();
}
