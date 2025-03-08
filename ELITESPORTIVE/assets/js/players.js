fetch('assets/data/players.json')
    .then(response => response.json())
    .then(players => {
        let output = "<h2>Team Players</h2>";
        players.forEach(player => {
            output += `<div class="player-card">
                        <img src="${player.image}" alt="${player.name}">
                        <h3>${player.name}</h3>
                        <p>Position: ${player.position}</p>
                        <p>Jersey Number: ${player.number}</p>
                       </div>`;
        });
        document.getElementById("players").innerHTML = output;
    })
    .catch(error => console.error('Error loading players:', error));