const produkter = ["Bromsbelägg", "Styrled"];
const slumpIndex = Math.floor(Math.random() * produkter.length);
document.getElementById("erbjudande").textContent = produkter[slumpIndex];
