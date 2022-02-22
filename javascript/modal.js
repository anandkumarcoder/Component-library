const modalBtn = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal-close");
const modalBox = document.querySelector(".modal-card");

modalBtn.addEventListener("click", () => {
  modalBox.style.display = "block";
});

modalCloseBtn.addEventListener("click", () => {
  modalBox.style.display = "none";
});
