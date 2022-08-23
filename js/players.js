const playerArray = [];
function selectedPlayers(favouritPlayers) {
    const selcetedList = document.getElementById('player-list');
    selcetedList.innerHTML = '';

    for (let i = 0; i < favouritPlayers.length; i++) {
        const name = playerArray[i].playerName;

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;

        selcetedList.appendChild(tr);

    }

}

function addPlayers(player) {
    const playerName = player.parentNode.children[1].innerText;

    if (player.disabled === false) {
        player.disabled = true;

    }

    const playerObj = {
        playerName: playerName
    }
    playerArray.push(playerObj);
    document.getElementById('total-players').innerText = playerArray.length;
    if (playerArray.length === 6) {
        alert('You can not added over the five players.');
        return;
    }
    selectedPlayers(playerArray);
}

buttonChangeColor('btn-neymar');
buttonChangeColor('btn-messi');
buttonChangeColor('btn-mbappe');
buttonChangeColor('btn-ronaldo');
buttonChangeColor('btn-shakib');
buttonChangeColor('btn-litton');
