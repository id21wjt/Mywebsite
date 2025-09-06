function visaSlumpErbjudande() {
  const produkter = ["Bromsbelägg", "Styrled"];
  const slumpIndex = Math.floor(Math.random() * produkter.length);
  const erbjudandeProdukt = produkter[slumpIndex];

  // Ändrar rubrik på sidan
  const rubrik = document.querySelector('.p');
  rubrik.textContent = "Dagens erbjudande: " + erbjudandeProdukt + " 20% rabatt!";
  rubrik.style.color = "red";
}

// Kör automatiskt när sidan laddas
window.onload = visaSlumpErbjudande;
