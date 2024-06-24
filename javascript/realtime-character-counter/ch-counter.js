const textareaEl = document.getElementById("textarea");
const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()
s
function updateCounter() {
  totalEl.innerText = textareaEl.value.length;
  remainingEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}