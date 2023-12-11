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

// Order By Whatsapp di Contact Section
const pelanggan = document.querySelector(".pelanggan");
const tanggalBooking = document.querySelector(".tanggalbooking");
const tempat = document.querySelector(".tempat");
const listSpa = document.querySelector(".listSpa");
const bookingConfirm = document.getElementById("tombolBooking");

function wa() {
  const url =
    "https://wa.me/6287881236381?text=Halo%20Master%20Spa%2C%20Saya%20Mau%20Konfirmasi%20Pemesanan%20Saya%20Ya%20!%0ANama%20%3A%20*" +
    pelanggan.value +
    "*%0ATanggal%20%3A%20*" +
    tanggalBooking.value +
    "*%0ALokasi%20%3A%20*" +
    tempat.value +
    "*%0APilih%20Paket%20%3A%20*" +
    listSpa.value +
    "*%0A%0ATerima%20Kasih%20!";

  window.open(url);
}

bookingConfirm.addEventListener("click", () => {
  wa();
});

// Order By Whatsapp di Package Section
const customerName = document.getElementById("customer-name");
const dateOrder = document.querySelector(".date-order");
const place = document.getElementById("place");
const packageMsg = document.getElementById("packageMsg");
const addMsg = document.getElementById("massage");
const bookForm = document.querySelector("#booking form");
const btnConfirm = document.querySelector(".orderNow");

function whatsappOrder() {
  const link =
    "https://wa.me/6287881236381?text=Halo%20Master%20Spa%2C%20Saya%20Mau%20Konfirmasi%20Pemesanan%20Saya%20Ya%20!%0ANama%20%3A%20*" +
    customerName.value +
    "*%0ATanggal%20%3A%20*" +
    dateOrder.value +
    "*%0ATempat%20PIlihan%20%3A%20*" +
    place.value +
    "*%0APilih%20Paket%20%3A%20*" +
    packageMsg.value +
    "*%0APesan%20Tambahan%20%3A%20*" +
    addMsg.value +
    "*%0A%0ATerima%20Kasih%20!";

  bookForm.reset();
  bookingConfirm.classList.toggle("popUp");
  window.open(link);
}

btnConfirm.addEventListener("click", () => {
  whatsappOrder();
});
