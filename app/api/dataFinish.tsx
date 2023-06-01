export async function getDataFinish(id:number) {
    const card = await fetch(
        `http://localhost:8080/api/finish/find-all-by-nature/${id}`
    ).then((response) => response.json());

    return card;
}