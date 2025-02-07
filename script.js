// URL-ul către fișierul JSON de pe GitHub
const API_URL = "https://raw.githubusercontent.com/andreeapopescu10/Safe-Kids/refs/heads/main/kids.json";

// Funcție pentru a încărca datele și a le afisa
async function fetchCenters() {
    try {
        // Fetch JSON de la GitHub
        const response = await fetch(API_URL);
        const data = await response.json();

        // Selectează div-ul unde vor fi afișate centrele
        const centersContainer = document.getElementById("centers");

        // Iterează prin fiecare centru și adaugă-l în HTML
        data.forEach(center => {
            const centerCard = document.createElement("div");
            centerCard.classList.add("center-card");

            centerCard.innerHTML = `
                <h3>${center.center_name}</h3>
                <p><strong>Adresa:</strong> ${center.address}</p>
                <p><strong>Contact:</strong> ${center.contact}</p>
            `;

            centersContainer.appendChild(centerCard);
        });

    } catch (error) {
        console.error("Eroare la încărcarea datelor:", error);
    }
}

// Apelează funcția la încărcarea paginii
fetchCenters();
