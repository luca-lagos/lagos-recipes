const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const isVisible = "modal-visible";

for (const pm of openModal) {
  pm.addEventListener("click", (e) => {
    e.preventDefault();
    const modalId = pm.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const cm of closeModal) {
  cm.addEventListener("click", (e) => {
    e.preventDefault();
    cm.parentElement.parentElement.parentElement.parentElement.classList.remove(
      isVisible
    );
  });
}

const clearSearchInput = document.querySelector(".search-clean i");

document.addEventListener("keyup", (e) => {
  const recipePanelDisabled = "recipes-panel-disabled";
  const recipeNotFound = document.querySelector(".recipes-notfound");
  const recipeNotFoundDisabled = "recipes-notfound-disabled";
  if (e.target.matches("#search-input")) {
    document.querySelectorAll(".recipes-panel").forEach((recipe) => {
      if (
        recipe.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        recipeNotFound.classList.add(recipeNotFoundDisabled);
        recipe.classList.remove(recipePanelDisabled);
      } else {
        recipe.classList.add(recipePanelDisabled);
      }
      if (e.target.value != "") {
        clearSearchInput.classList.remove("search-clean-hidden");
      } else {
        clearSearchInput.classList.add("search-clean-hidden");
      }
      clearSearchInput.addEventListener("click", () => {
        e.target.value = "";
        recipe.classList.remove(recipePanelDisabled);
        clearSearchInput.classList.add("search-clean-hidden");
      });
    });
  }
});
