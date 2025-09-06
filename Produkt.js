const urlParams = new URLSearchParams(window.location.search);
const produkt = urlParams.get('produkt'); 
if (produkt) {
  document.getElementById('produkt').value = produkt;
}
