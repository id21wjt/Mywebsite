function visaSlumpErbjudande() {
  const produkter = ["Bromsbelägg", "Styrled"];
  const slumpIndex = Math.floor(Math.random() * produkter.length);
  const erbjudandeProdukt = produkter[slumpIndex];

  document.getElementById("erbjudande-text").textContent =
  "Dagens erbjudande: " + erbjudandeProdukt + " 20% rabatt!";
  erbjudande.style.color = "red";
}


// Kör automatiskt när sidan laddas
window.onload = visaSlumpErbjudande;
