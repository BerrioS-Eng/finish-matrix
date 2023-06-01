export async function getDataNature() {
    const card = await fetch(
        `http://localhost:8080/api/nature/find-all`
    ).then((response) => response.json());

    return card;
}