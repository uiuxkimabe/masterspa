// Tombol Menu (Smartphone View)
const hamBtn = document.querySelector(".hamBtn");
const navigasi = document.querySelector(".navigasi");
console.info(hamBtn, navigasi);

hamBtn.addEventListener("click", () => {
  navigasi.classList.toggle("popUp");
});

// Tutup Navigasi Saat Salah 1 Menu Di Klik
const navigasiLink = document.querySelectorAll(".navigasi a");
navigasiLink.forEach((element) => {
  element.addEventListener("click", () => {
    navigasi.classList.toggle("popUp");
  });
});
