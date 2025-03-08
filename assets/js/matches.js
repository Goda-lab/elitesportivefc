fetch('assets/data/matches.json')
    .then(response => response.json())
    .then(matches => {
        let output = "<h2>Recent Matches</h2>";
        matches.forEach(match => {
            output += `<div class="match-card">
                        <strong>${match.home}</strong> vs <strong>${match.away}</strong>
                        <p>Score: ${match.score}</p>
                        <p>Date: ${match.date}</p>
                       </div>`;
        });
        document.getElementById("matches").innerHTML = output;
    })
    .catch(error => console.error('Error loading matches:', error));