function visaSlumpErbjudande() {
  const produkter = ["Bromsbelägg", "Styrled"];
  const slumpIndex = Math.floor(Math.random() * produkter.length);
  const erbjudandeProdukt = produkter[slumpIndex];

  document.getElementById("erbjudande-text").textContent =
  "Dagens erbjudande: " + erbjudandeProdukt + " 20% rabatt!";

  document.getElementById("erbjudande-text").style.color = "red";
}


// Kör automatiskt när sidan laddas
window.onload = visaSlumpErbjudande;
