export async function getDataGrades(type:string) {
    const grades = await fetch(
      `http://localhost:8080/api/grade/find-all-by-namegrade/${type}`
    ).then((response) => response.json());
  
    return grades;
  }