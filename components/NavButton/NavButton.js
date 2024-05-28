const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

export function Buttons(text, onClick) {
  const newButton = document.createElement("button");
  newButton.classList.add("button");
  newButton.textContent = text;
  newButton.addEventListener("click", onClick);
  return newButton;
}
