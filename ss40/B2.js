function addPlayer() {
    let playerNameInput = document.getElementById("playerName");
    let playerName = playerNameInput.value;

    if (playerName.trim() === "") {
        alert("Vui lòng nhập tên cầu thủ.");
        return;
    }
    let playerId = Date.now();
    let players = JSON.parse(localStorage.getItem("players")) || {};
    players[playerId] = playerName;
    localStorage.setItem("players", JSON.stringify(players));
    displayPlayers();
    playerNameInput.value = "";
}

function displayPlayers() {
    let playerList = document.getElementById("playerList");
    let players = JSON.parse(localStorage.getItem("players")) || {};
    playerList.innerHTML = "<h3>Danh Sách Cầu Thủ</h3>";
    for (let playerId in players) {
        playerList.innerHTML += "<p><strong>ID:</strong> " + playerId +
            " - <strong>Tên Cầu Thủ:</strong> " + players[playerId] ;
    }
}

let addPlayerBtn = document.getElementById("addPlayerBtn");
addPlayerBtn.addEventListener("click", addPlayer);
displayPlayers();