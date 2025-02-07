const API_URL = "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/andreeapopescu10/Safe-Kids/main/safe_kids_centers.json";

const fetchCenters = async () => {
  try {
    // Trimitem cererea și așteptăm răspunsul
    const response = await fetch(API_URL);

    // Verificăm dacă răspunsul este ok
    if (!response.ok) {
      throw new Error("Nu s-a putut încărca fișierul JSON.");
    }

    // Încercăm să transformăm răspunsul într-un obiect JSON
    const data = await response.json();

    // Verificăm dacă datele au fost corect preluate
    if (!data || data.length === 0) {
      throw new Error("Datele JSON sunt goale sau incorecte.");
    }

    // Dacă datele sunt corecte, le afișăm
    let output = "";
    data.forEach(center => {
      output += `
        <div>
          <h3>${center.nume ? center.nume : "Nume necunoscut"}</h3>
          <p><strong>Adresa:</strong> ${center.adresa ? center.adresa : "Adresă necunoscută"}</p>
          <p><strong>Contact:</strong> ${center.contact ? center.contact : "Contact necunoscut"}</p>
        </div>
      `;
    });

    // Adăugăm rezultatul în div-ul cu id-ul "centers"
    document.getElementById("centers").innerHTML = output;

  } catch (error) {
    console.error("Eroare la încărcarea datelor:", error);
    alert("Eroare la încărcarea centrelor: " + error.message);
  }
};

// Apelează funcția pentru a prelua datele când se încarcă pagina
window.onload = fetchCenters;
