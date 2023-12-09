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

// Btn Order to Open Booking Form
const orderBtn = document.querySelectorAll(".order-btn");
const bookingForm = document.getElementById("booking");
const closeBooking = document.querySelector(".closeBooking");
console.info(orderBtn);
orderBtn.forEach((element) => {
  element.addEventListener("click", () => {
    bookingForm.classList.toggle("popUp");
  });
});
closeBooking.addEventListener("click", () => {
  bookingForm.classList.toggle("popUp");
});
