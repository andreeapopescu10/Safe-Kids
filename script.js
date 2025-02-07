console.log(data);
// URL-ul către fișierul JSON de pe GitHub
const API_URL = "https://raw.githubusercontent.com/andreeapopescu10/Safe-Kids/refs/heads/main/kids.json";

// Funcție pentru a încărca datele și a le afisa
const fetchCenters = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    // Verifică datele în consolă pentru a te asigura că sunt corecte
    console.log(data);  // Verifică în consola browserului
    
    let output = "";
    data.forEach(center => {
      output += `
        <div>
          <h3>${center.nume ? center.nume : "Name unknown"}</h3>
          <p><strong>Adresa:</strong> ${center.adresa ? center.adresa : "Unknown Address"}</p>
          <p><strong>Contact:</strong> ${center.contact ? center.contact : "Unknown Contact"}</p>
        </div>
      `;
    });

    // Adăugăm rezultatul în div-ul cu id-ul "centers"
    document.getElementById("centers").innerHTML = output;

  } catch (error) {
    console.error("Eroare la încărcarea datelor:", error);
    alert("Error");
  }
};

// Apelează funcția pentru a prelua datele când se încarcă pagina
window.onload = fetchCenters;
