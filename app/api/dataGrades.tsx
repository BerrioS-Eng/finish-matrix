export async function getDataGrades(type: string) {
  const data = await fetch(
    `http://localhost:8080/api/grade/find-all-by-namegrade/${type}`
  );
  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }
  return data.json();
}