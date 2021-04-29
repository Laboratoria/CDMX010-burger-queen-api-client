export let order = (client) => {
    let card = `
    <div class="cardclients">
        <img class="logochico" src="assets/logo rio de janeiro.png">
        <p> ${client.product}</p>
        <p> ${client.product}</p>
        <p> ${client.product}</p>
        <p> ${client.product}</p>
        <div></div>
        <div>TOTAL</div>
    </div>
    `;
    return card;
}