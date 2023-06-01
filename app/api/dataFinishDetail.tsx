export async function getDataFinishDetail(id:number) {
    const card = await fetch(
        `http://localhost:8080/api/finish/find-by-identity/${id}`
    ).then((response) => response.json());

    return card;
}