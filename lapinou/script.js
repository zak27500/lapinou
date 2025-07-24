const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

noBtn.addEventListener('mouseover', () => {
  const randX = Math.random() * 300 - 150;
  const randY = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${randX}px, ${randY}px)`;
});

function oui() {
  response.innerHTML = "Ouuuuiiiiii 💍🐰 T'es ma copine maintenant 💖";
}
