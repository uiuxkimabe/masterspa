// Tombol Menu (Smartphone View)
const hamBtn = document.querySelector(".hamBtn");
const navigasi = document.querySelector(".navigasi");

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
orderBtn.forEach((element) => {
  element.addEventListener("click", () => {
    bookingForm.classList.toggle("popUp");
  });
});
closeBooking.addEventListener("click", () => {
  bookingForm.classList.toggle("popUp");
});

// Order By Whatsapp di Contact
const customerName = document.querySelector(".pelanggan");
const dateOrder = document.querySelector(".tanggalbooking");
const place = document.querySelector(".tempat");
const list = document.querySelector(".listSpa");
const bookingConfirm = document.getElementById("tombolBooking");

function wa() {
  const url =
    "https://wa.me/6281385532791?text=Halo%20Master%20Spa%2C%20Saya%20Mau%20Konfirmasi%20Pemesanan%20Saya%20Ya%20!%0ANama%20%3A%20*" +
    customerName.value +
    "*%0ATanggal%20%3A%20*" +
    dateOrder.value +
    "*%0ALokasi%20%3A%20*" +
    place.value +
    "*%0ATempat%20PIlihan%20%3A%20*" +
    place.value +
    "*%0APilih%20Paket%20%3A%20*" +
    list.value +
    "*%0APesan%20Tambahan%20%3A%20*" +
    list.value +
    "*%0A%0ATerima%20Kasih%20!";

  window.open(url);
}

bookingConfirm.addEventListener("click", () => {
  wa();
  
  console.info("oke");
});
