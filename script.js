let eldenDataInput = document.getElementById("eldenQuery");
let cardContainer = document.getElementById("card-container");

async function getQuery() {
    console.log(eldenDataInput.value);
    const eldenData = eldenDataInput.value;
    eldenDataInput.value = '';
    const response = await fetch(`https://eldenring.fanapis.com/api/bosses?name=` + eldenData);
    console.log("A",response);
    let data = await response.json();
    console.log("B",data);
    const bossCard = createBossCard(data);
    cardContainer.innerHTML += bossCard;
}

function createBossCard(data) {
    const bossCard = `
    <div class="card" style="width: 18rem;" id="balls">
  <img src="${data.image}" class="card-img-top" alt="${data.name}">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">Description: ${data.description}</p>
    <p class="card-text">Location: ${data.location}</p>
    <p class="card-text">HP: ${data.healthPoints}</p>
    <p class="card-text">Drops: ${data.drops}</p>
    <a href="#" class="btn btn-danger">DELETE</a>
  </div>
    </div>`;
    return bossCard;
}