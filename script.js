let eldenDataInput = document.getElementById("eldenQuery");

async function getQuery() {
    console.log(eldenDataInput.value);
    const eldenData = eldenDataInput.value;
    eldenDataInput.value = '';
    const response = await fetch (`https://elden-ring-wiki.p.rapidapi.com/bosses`);
    console.log(response);
    const data = await response.json();
    console.log(data);
}