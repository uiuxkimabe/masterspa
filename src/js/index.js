// Tombol Menu (Smartphone View)
const hamBtn = document.querySelector(".hamBtn");
const navigasi = document.querySelector(".navigasi");
console.info(hamBtn, navigasi);

hamBtn.addEventListener("click", () => {
  navigasi.classList.toggle("popUp");
});
