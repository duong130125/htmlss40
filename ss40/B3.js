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

function deletePlayer(playerIdToDelete) {
    let players = JSON.parse(localStorage.getItem("players")) || {};
    if (players.hasOwnProperty(playerIdToDelete)) {
        delete players[playerIdToDelete];
        localStorage.setItem("players", JSON.stringify(players));
        displayPlayers();
    } else {
        alert("Không tìm thấy cầu thủ với ID " + playerIdToDelete);
    }
}

function displayPlayers() {
    let playerListContainer = document.getElementById("playerList");
    let players = JSON.parse(localStorage.getItem("players")) || {};
    playerListContainer.innerHTML = "<h3>Danh Sách Cầu Thủ</h3>";
    for (let playerId in players) {
        playerListContainer.innerHTML += "<div>" +
            "<p><strong>ID:</strong> " + playerId +
            " - <strong>Tên Cầu Thủ:</strong> " + players[playerId] +
            "</p>" 
            "</div>";
    }
}

let addPlayerBtn = document.getElementById("addPlayerBtn");
addPlayerBtn.addEventListener("click", addPlayer);

let deletePlayerBtn = document.getElementById("deletePlayerBtn");
deletePlayerBtn.addEventListener("click", function() {
    let playerIdToDelete = document.getElementById("playerIdToDelete").value;
    deletePlayer(playerIdToDelete);
});
displayPlayers();
