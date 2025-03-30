// Fetch matches data from the JSON file
fetch('assets/data/matches.json')
    .then(response => response.json())
    .then(matches => {
        const matchesContainer = document.getElementById('matches');

        matches.forEach(match => {
            // Create a container for each match
            const matchDiv = document.createElement('div');
            matchDiv.classList.add('match');

            // Add match details
            matchDiv.innerHTML = `
                <h3>${match.home} vs ${match.away}</h3>
                <p class="match-date">${match.date}</p>
                <div class="scoreboard">
                    <div class="team">
                        <p>${match.score.split('-')[0]}</p>
                        <ul>
                            ${match.scorers[match.home]
                                .map(player => `<li>${player}</li>`)
                                .join('')}
                        </ul>
                    </div>
                    <div class="separator">:</div>
                    <div class="team">
                        <p>${match.score.split('-')[1]}</p>
                        <ul>
                            ${match.scorers[match.away]
                                .map(player => `<li>${player}</li>`)
                                .join('')}
                        </ul>
                    </div>
                </div>
            `;

            // Append the match to the container
            matchesContainer.appendChild(matchDiv);
        });
        document.getElementById("matches").innerHTML = output;
    })
    .catch(error => console.error('Error fetching matches:', error));