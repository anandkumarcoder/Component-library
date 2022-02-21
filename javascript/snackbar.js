const baseBtn = document.querySelector("#base");
const baseSnackbar = document.querySelector("#base-snackbar");
const baseCloseBtn = document.querySelector("#base-snackbar");
const leadingBtn = document.querySelector("#leading");
const leadingSnackbar = document.querySelector("#leading-snackbar");
const leadingCloseBtn = document.querySelector("#leading-snackbar");
const stackedBtn = document.querySelector("#stacked");
const stackedSnackbar = document.querySelector("#stacked-snackbar");
const stackedCloseBtn = document.querySelector("#stacked-snackbar");

baseBtn.addEventListener("click", () => {
  baseSnackbar.style.visibility = "visible";
});

baseCloseBtn.addEventListener("click", () => {
  baseSnackbar.style.visibility = "hidden";
});

leadingBtn.addEventListener("click", () => {
  leadingSnackbar.style.visibility = "visible";
});

leadingCloseBtn.addEventListener("click", () => {
  leadingSnackbar.style.visibility = "hidden";
});

stackedBtn.addEventListener("click", () => {
  stackedSnackbar.style.visibility = "visible";
});

stackedCloseBtn.addEventListener("click", () => {
  stackedSnackbar.style.visibility = "hidden";
});
